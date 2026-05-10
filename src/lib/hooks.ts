'use client'
import { useEffect, useRef, useState } from 'react'

export function useInView<T extends Element = HTMLDivElement>({
  threshold  = 0.15,
  rootMargin = '0px 0px -60px 0px',
  once       = true,
}: { threshold?: number; rootMargin?: string; once?: boolean } = {}) {
  const ref              = useRef<T>(null)
  const [inView, setInView] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setInView(true); if (once) obs.disconnect() } else if (!once) setInView(false) },
      { threshold, rootMargin },
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [threshold, rootMargin, once])
  return [ref, inView] as const
}

export function useCountUp(target: number, duration = 1800, trigger = false) {
  const [count, setCount] = useState(0)
  useEffect(() => {
    if (!trigger) return
    let start: number | null = null
    const step = (ts: number) => {
      if (!start) start = ts
      const p = Math.min((ts - start) / duration, 1)
      const e = 1 - Math.pow(1 - p, 3)
      setCount(Math.round(target * e))
      if (p < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [target, duration, trigger])
  return count
}
