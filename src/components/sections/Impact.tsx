'use client'
import { useTranslations } from 'next-intl'
import { motion } from 'framer-motion'
import { useInView, useCountUp } from '@/lib/hooks'
import { cn } from '@/lib/utils'

interface Metric { value: number; suffix: string; prefix: string; label: string }

function Counter({ value, suffix, prefix, label, trigger }: Metric & { trigger: boolean }) {
  const count = useCountUp(value, 1600, trigger)
  return (
    <div className="text-center px-8 py-10 border-r border-white/[0.06] last:border-r-0">
      <div className="text-5xl md:text-6xl font-bold text-volt mb-3 tabular-nums">
        {prefix}{count}{suffix}
      </div>
      <p className="text-sm text-marfil/50 max-w-[160px] mx-auto leading-relaxed">{label}</p>
    </div>
  )
}

export function ImpactNumbers() {
  const t       = useTranslations('impact')
  const metrics = t.raw('metrics') as Metric[]
  const [ref, inView] = useInView<HTMLElement>({ threshold: 0.2 })

  return (
    <section ref={ref} id="impacto" aria-labelledby="impact-h2" className="bg-grafito-mid py-section">
      <div className="section-wrapper">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }} className="text-center mb-14">
          <span className="eyebrow"><span className="w-5 h-px bg-volt" aria-hidden />{t('eyebrow')}</span>
          <h2 id="impact-h2" className="text-display-lg text-marfil text-balance mt-2">{t('h2')}</h2>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.2 }}
          className="border border-white/[0.07] rounded-2xl overflow-hidden bg-grafito">
          <div className={cn('grid', `grid-cols-${metrics.length}`)}>
            {metrics.map((m, i) => <Counter key={i} {...m} trigger={inView} />)}
          </div>
          <div className="border-t border-white/[0.06] px-8 py-5 text-center">
            <p className="text-sm text-marfil/30 italic">
              "Convertimos negocios que funcionan como pueden… en empresas que funcionan con lógica, orden y dirección."
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
