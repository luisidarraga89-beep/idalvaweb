'use client'
import { useTranslations } from 'next-intl'
import { cn } from '@/lib/utils'

export function MarqueeTicker({ className }: { className?: string }) {
  const t       = useTranslations('marquee')
  const phrases = t.raw('phrases') as string[]
  const items   = [...phrases, ...phrases]

  return (
    <div aria-hidden className={cn('relative overflow-hidden py-4 border-y border-white/[0.06] bg-grafito-mid', className)}>
      <div className="absolute left-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-r from-grafito-mid to-transparent pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-l from-grafito-mid to-transparent pointer-events-none" />
      <div className="flex animate-marquee whitespace-nowrap">
        {items.map((phrase, i) => (
          <span key={i} className="inline-flex items-center gap-6 mx-8">
            <span className="text-sm font-light text-marfil/30 tracking-wide">{phrase}</span>
            <span className="w-1 h-1 rounded-full bg-volt/40 flex-shrink-0" />
          </span>
        ))}
      </div>
    </div>
  )
}
