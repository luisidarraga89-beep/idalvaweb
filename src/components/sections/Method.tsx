'use client'
import { useState } from 'react'
import { useTranslations } from 'next-intl'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from '@/lib/hooks'
import { cn } from '@/lib/utils'

export function MethodSection() {
  const t     = useTranslations('method')
  const steps = t.raw('steps') as { num: string; title: string; desc: string }[]
  const [active, setActive] = useState<number | null>(0)
  const [ref, inView] = useInView<HTMLElement>({ threshold: 0.1 })

  return (
    <section ref={ref} id="metodo" aria-labelledby="method-h2" className="bg-surface py-section">
      <div className="section-wrapper">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }} className="mb-12">
          <span className="eyebrow"><span className="w-5 h-px bg-volt" aria-hidden />{t('eyebrow')}</span>
          <h2 id="method-h2" className="text-display-lg text-marfil text-balance mt-2">{t('h2')}</h2>
        </motion.div>
        <div className="flex flex-col gap-3">
          {steps.map((step, i) => (
            <motion.div key={i} initial={{ opacity: 0, x: -20 }} animate={inView ? { opacity: 1, x: 0, transition: { duration: 0.45, delay: i * 0.1 } } : {}}>
              <button
                onClick={() => setActive(active === i ? null : i)}
                aria-expanded={active === i}
                className={cn(
                  'w-full text-left flex items-start gap-6 p-6 rounded-xl border transition-all duration-300',
                  active === i
                    ? 'bg-grafito-mid border-volt/30'
                    : 'bg-grafito-light/30 border-white/[0.06] hover:border-white/[0.12]'
                )}>
                <span className={cn('text-3xl font-bold leading-none mt-0.5 flex-shrink-0 transition-colors duration-300', active === i ? 'text-volt' : 'text-marfil/15')}>
                  {step.num}
                </span>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-4">
                    <span className={cn('text-lg font-semibold transition-colors duration-300', active === i ? 'text-marfil' : 'text-marfil/60')}>{step.title}</span>
                    <svg className={cn('w-5 h-5 flex-shrink-0 transition-all duration-300', active === i ? 'text-volt rotate-45' : 'text-marfil/30')} fill="none" viewBox="0 0 20 20" aria-hidden>
                      <path d="M10 4v12M4 10h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                    </svg>
                  </div>
                  <AnimatePresence initial={false}>
                    {active === i && (
                      <motion.p initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.25 }}
                        className="text-marfil/55 text-body-md mt-3 text-pretty overflow-hidden">
                        {step.desc}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>
              </button>
            </motion.div>
          ))}
        </div>
        {/* Connecting line decoration */}
        <div className="hidden lg:flex justify-between mt-8 px-8" aria-hidden>
          {steps.map((step, i) => (
            <div key={i} className="flex flex-col items-center gap-2">
              <div className={cn('w-8 h-8 rounded-full border-2 flex items-center justify-center text-xs font-bold transition-colors duration-300', active === i ? 'border-volt bg-volt/10 text-volt' : 'border-white/10 text-marfil/20')}>{step.num}</div>
              {i < steps.length - 1 && <div className="w-full h-px bg-white/[0.06] absolute" />}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
