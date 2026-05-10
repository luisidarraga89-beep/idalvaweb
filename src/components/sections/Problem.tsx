'use client'
import { useTranslations } from 'next-intl'
import { motion } from 'framer-motion'
import { useInView } from '@/lib/hooks'
import { cn } from '@/lib/utils'

export function ProblemSection() {
  const t        = useTranslations('problem')
  const symptoms = t.raw('symptoms') as string[]
  const [ref, inView] = useInView<HTMLElement>({ threshold: 0.1 })

  return (
    <section ref={ref} id="el-problema" aria-labelledby="problem-h2" className="relative bg-grafito py-section overflow-hidden">
      <div className="section-wrapper relative z-10">
        <motion.div initial={{ opacity: 0, y: 32 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.55 }} className="max-w-3xl mb-16">
          <span className="eyebrow"><span className="w-5 h-px bg-volt" aria-hidden />{t('eyebrow')}</span>
          <h2 id="problem-h2" className="text-display-lg text-marfil text-balance mt-2 mb-6">{t('h2')}</h2>
          <p className="text-body-lg text-marfil/55 text-pretty max-w-2xl">{t('body')}</p>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4" role="list" aria-label="Síntomas del caos operativo">
          {symptoms.map((s, i) => (
            <motion.div key={i} role="listitem"
              initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
              animate={inView ? { opacity: 1, x: 0, transition: { duration: 0.5, delay: 0.1 + i * 0.12 } } : {}}
              className="group relative flex items-start gap-4 p-5 rounded-xl border border-white/[0.07] bg-grafito-mid hover:border-volt/20 transition-colors duration-300 cursor-default">
              <div className="flex-shrink-0 mt-0.5 w-9 h-9 rounded-lg flex items-center justify-center bg-white/[0.04] border border-white/[0.07] text-marfil/40 group-hover:text-volt/60 transition-colors duration-300">
                <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4" aria-hidden>
                  <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.2" strokeDasharray="3 2"/>
                  <path d="M12 8v4l2.5 2.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </div>
              <p className="text-body-md text-marfil/60 group-hover:text-marfil/75 transition-colors duration-300">{s}</p>
              <div className="absolute left-0 top-4 bottom-4 w-0.5 bg-volt/0 group-hover:bg-volt/40 transition-all duration-300 rounded-full" />
            </motion.div>
          ))}
        </div>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.6 } } : {}}
          className="mt-16 pt-16 border-t border-white/[0.06] text-center">
          <p className="text-display-md text-marfil/20">El problema no es falta de ganas.</p>
          <p className="text-display-md text-marfil mt-1">Es falta de <span className="text-volt">sistema</span>.</p>
        </motion.div>
      </div>
    </section>
  )
}
