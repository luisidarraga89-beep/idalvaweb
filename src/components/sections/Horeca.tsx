'use client'
import { useTranslations } from 'next-intl'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { useInView } from '@/lib/hooks'
import { cn } from '@/lib/utils'

export function HorecaSection() {
  const t     = useTranslations('horeca')
  const items = t.raw('items') as { title: string; desc: string }[]
  const tags  = t.raw('tags') as string[]
  const [ref, inView] = useInView<HTMLElement>({ threshold: 0.1 })

  return (
    <section ref={ref} id="horeca" aria-labelledby="horeca-h2"
      className="relative bg-grafito py-section overflow-hidden"
      itemScope itemType="https://schema.org/Service">
      {/* Volt glow left */}
      <div aria-hidden className="absolute -left-40 top-1/2 -translate-y-1/2 w-80 h-80 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle,rgba(200,240,78,0.07) 0%,transparent 70%)' }} />

      <div className="section-wrapper relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Left: text */}
          <motion.div initial={{ opacity: 0, x: -24 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.55 }}>
            <span className="eyebrow"><span className="w-5 h-px bg-volt" aria-hidden />{t('eyebrow')}</span>
            <h2 id="horeca-h2" className="text-display-lg text-marfil text-balance mt-2 mb-6" itemProp="name">{t('h2')}</h2>
            <p className="text-body-lg text-marfil/55 text-pretty mb-8" itemProp="description">{t('body')}</p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-8" role="list" aria-label="Tipos de negocio HORECA">
              {tags.map((tag, i) => (
                <span key={i} role="listitem" className="inline-flex items-center px-3 py-1.5 rounded-full text-sm border border-volt/20 text-volt/70 bg-volt/[0.06]">{tag}</span>
              ))}
            </div>

            {/* Tools note */}
            <p className="text-sm text-marfil/35 mb-8">{t('tools')}</p>

            <Link href="/digitalizacion-horeca" className="btn-volt" aria-label="Ver solución idalva para HORECA">
              {t('cta')}
              <svg className="w-4 h-4" fill="none" viewBox="0 0 16 16" aria-hidden>
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </motion.div>

          {/* Right: capability cards */}
          <motion.div initial={{ opacity: 0, x: 24 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.55, delay: 0.15 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {items.map((item, i) => (
              <div key={i} className={cn('p-5 rounded-xl border border-white/[0.07] bg-grafito-mid', 'hover:border-volt/20 transition-colors duration-300 group')}>
                <div className="w-8 h-8 rounded-lg bg-volt/[0.08] border border-volt/20 flex items-center justify-center mb-4 group-hover:bg-volt/[0.12] transition-colors duration-300">
                  <svg viewBox="0 0 20 20" fill="none" className="w-4 h-4 text-volt" aria-hidden>
                    <path d="M10 3l2.5 4.5H17l-3.5 3 1.5 5L10 13l-5 2.5 1.5-5L3 7h4.5L10 3z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="font-semibold text-marfil mb-2">{item.title}</h3>
                <p className="text-sm text-marfil/50 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  )
}
