'use client'
import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'
import { Isotipo } from '@/components/ui/Isotipo'
import { cn } from '@/lib/utils'

const container = { hidden: {}, show: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } } }
const item = { hidden: { opacity: 0, y: 28 }, show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.25, 0.1, 0.25, 1] } } }

export function HeroSection({ onOpenContact }: { onOpenContact: () => void }) {
  const t = useTranslations('hero')
  return (
    <section id="inicio" aria-label="Sección principal idalva"
      className="relative min-h-svh flex flex-col justify-center pt-24 pb-16 md:pt-28 md:pb-20 bg-grafito overflow-hidden">
      <div aria-hidden className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{ backgroundImage: 'linear-gradient(rgba(200,240,78,0.8) 1px,transparent 1px),linear-gradient(90deg,rgba(200,240,78,0.8) 1px,transparent 1px)', backgroundSize: '60px 60px' }} />
      <div aria-hidden className="absolute -top-32 -right-32 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle,rgba(200,240,78,0.06) 0%,transparent 70%)' }} />
      <div className="section-wrapper relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div variants={container} initial="hidden" animate="show" className="flex flex-col gap-6 max-w-2xl">
            <motion.div variants={item}>
              <span className="eyebrow"><span className="w-5 h-px bg-volt" aria-hidden />{t('eyebrow')}</span>
            </motion.div>
            <motion.h1 variants={item} className="text-display-xl text-marfil text-balance leading-[1.05]">
              {t('h1_line1')}{' '}<span className="text-marfil/45">{t('h1_line2')}</span>
            </motion.h1>
            <motion.p variants={item} className="text-body-lg text-marfil/55 text-pretty max-w-xl">{t('subtitle')}</motion.p>
            <motion.div variants={item} className="flex flex-col sm:flex-row gap-3 pt-2">
              <button onClick={onOpenContact} className="btn-volt group" aria-label="Agendar diagnóstico con idalva">
                {t('cta_primary')}
                <svg className="w-4 h-4 transition-transform group-hover:translate-x-0.5" fill="none" viewBox="0 0 16 16" aria-hidden>
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <a href="#contacto" className="btn-ghost">{t('cta_secondary')}</a>
            </motion.div>
            <motion.div variants={item} className="flex items-center gap-3 pt-1">
              <div className="flex -space-x-1.5" aria-hidden>
                {['LI','MV'].map((init, i) => (
                  <div key={i} className="w-7 h-7 rounded-full bg-grafito-mid border border-white/10 flex items-center justify-center text-[9px] font-medium text-volt-dim">{init}</div>
                ))}
              </div>
              <p className="text-xs text-marfil/35">Luis &amp; Melissa · Fundadores con más de 12 años operando negocios reales</p>
            </motion.div>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.92 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
            className="hidden lg:flex items-center justify-center" aria-hidden>
            <div className="relative flex items-center justify-center w-full max-w-sm aspect-square">
              <div className="absolute inset-0 rounded-full border border-white/[0.04]" style={{ animation: 'spin 40s linear infinite' }} />
              <div className="absolute inset-8 rounded-full border border-white/[0.04]" style={{ animation: 'spin 30s linear infinite reverse' }} />
              <div className="absolute w-40 h-40 rounded-full blur-3xl opacity-20" style={{ background: 'radial-gradient(circle,#C8F04E 0%,transparent 70%)' }} />
              <Isotipo size={180} animated onDark hero className="relative z-10" />
              {[{ angle: 30, label: 'CRM', delay: 1.2 }, { angle: 150, label: 'ERP', delay: 1.5 }, { angle: 270, label: 'Ventas', delay: 1.8 }].map(({ angle, label, delay }) => {
                const x = 50 + Math.cos(angle * Math.PI / 180) * 42
                const y = 50 + Math.sin(angle * Math.PI / 180) * 42
                return (
                  <motion.div key={label} initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay, duration: 0.4 }}
                    className="absolute" style={{ left: `${x}%`, top: `${y}%`, transform: 'translate(-50%,-50%)' }}>
                    <div className="bg-grafito-mid border border-volt/20 rounded-lg px-2.5 py-1.5 text-[10px] font-medium text-volt whitespace-nowrap">{label}</div>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>
        </div>
      </div>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.8, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2" aria-hidden>
        <span className="text-[10px] text-marfil/25 uppercase tracking-widest">Scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-volt/40 to-transparent animate-pulse-volt" />
      </motion.div>
    </section>
  )
}
