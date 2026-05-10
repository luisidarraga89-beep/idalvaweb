'use client'
import { useTranslations } from 'next-intl'
import { motion } from 'framer-motion'
import { useInView } from '@/lib/hooks'
import { Isotipo } from '@/components/ui/Isotipo'

export function CtaFinal({ onOpenContact }: { onOpenContact: () => void }) {
  const t = useTranslations('cta_final')
  const [ref, inView] = useInView<HTMLElement>({ threshold: 0.2 })

  return (
    <section ref={ref} id="contacto" aria-labelledby="cta-h2"
      className="relative bg-grafito py-section overflow-hidden">
      {/* Background glow */}
      <div aria-hidden className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 60% 50% at 50% 100%, rgba(200,240,78,0.05) 0%, transparent 70%)' }} />

      <div className="section-wrapper relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={inView ? { opacity: 1, scale: 1 } : {}} transition={{ duration: 0.55 }}
            className="flex flex-col items-center gap-8">
            <div aria-hidden><Isotipo size={64} animated onDark /></div>
            <div>
              <h2 id="cta-h2" className="text-display-lg text-marfil text-balance mb-4">{t('h2')}</h2>
              <p className="text-body-lg text-marfil/50 text-pretty">{t('sub')}</p>
            </div>
            <button onClick={onOpenContact} className="btn-volt text-base px-8 py-4 group" aria-label="Solicitar diagnóstico gratuito con idalva">
              {t('cta')}
              <svg className="w-5 h-5 transition-transform group-hover:translate-x-0.5" fill="none" viewBox="0 0 20 20" aria-hidden>
                <path d="M4 10h12M10 4l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <p className="text-xs text-marfil/25">Sin compromiso · Respuesta en menos de 24h · luisidarraga89@gmail.com</p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
