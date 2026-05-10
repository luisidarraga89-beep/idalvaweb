import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'

const rateMap = new Map<string, { count: number; ts: number }>()

const schema = z.object({
  name:      z.string().min(2).max(80),
  company:   z.string().min(1).max(100),
  email:     z.string().email(),
  phone:     z.string().max(20).optional(),
  challenge: z.string().min(10).max(500),
  source:    z.string().max(50).optional(),
})

export async function POST(req: NextRequest) {
  try {
    const ip  = req.headers.get('x-forwarded-for')?.split(',')[0] ?? 'unknown'
    const now = Date.now()
    const rl  = rateMap.get(ip)
    if (rl && now - rl.ts < 60_000) {
      if (rl.count >= 3) return NextResponse.json({ error: 'Too many requests' }, { status: 429 })
      rateMap.set(ip, { count: rl.count + 1, ts: rl.ts })
    } else {
      rateMap.set(ip, { count: 1, ts: now })
    }

    const parsed = schema.safeParse(await req.json())
    if (!parsed.success) return NextResponse.json({ error: 'Validation failed' }, { status: 400 })

    const webhookUrl = process.env.CONTACT_WEBHOOK_URL
    if (webhookUrl) {
      await fetch(webhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...parsed.data, timestamp: new Date().toISOString() }),
      })
    } else {
      console.log('[idalva contact]', parsed.data.name, parsed.data.email)
    }

    return NextResponse.json({ success: true })
  } catch {
    return NextResponse.json({ error: 'Server error' }, { status: 500 })
  }
}

export async function GET() {
  return NextResponse.json({ error: 'Method not allowed' }, { status: 405 })
}
