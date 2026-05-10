'use client'
import { useTranslations } from 'next-intl'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { useInView } from '@/lib/hooks'
import { cn } from '@/lib/utils'
import { ROUTES } from '@/lib/utils'

export function TeamSection() {
  const t    = useTranslations('team')
  const luis = t.raw('luis')     as { name: string; role: string; focus: string; quote: string; bio: string }
  const mel  = t.raw('melissa')  as { name: string; role: string; focus: string; quote: string; bio: string }
  const [ref, inView] = useInView<HTMLElement>({ threshold: 0.1 })

  const members = [luis, mel]
  const initials = ['LI', 'MV']

  return (
    <section ref={ref} id="equipo" aria-labelledby="team-h2" className="bg-surface py-section">
      <div className="section-wrapper">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }} className="mb-12">
          <span className="eyebrow"><span className="w-5 h-px bg-volt" aria-hidden />{t('eyebrow')}</span>
          <h2 id="team-h2" className="text-display-lg text-marfil text-balance mt-2 mb-4">{t('h2')}</h2>
          <p className="text-body-lg text-marfil/55 max-w-2xl text-pretty">{t('body')}</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {members.map((m, i) => (
            <motion.div key={i}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0, transition: { duration: 0.5, delay: i * 0.15 } } : {}}
              itemScope itemType="https://schema.org/Person"
              className="flex flex-col gap-6 p-7 rounded-2xl border border-white/[0.07] bg-grafito-mid hover:border-volt/20 transition-colors duration-300">

              {/* Avatar + name */}
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-grafito border-2 border-volt/20 flex items-center justify-center text-lg font-bold text-volt flex-shrink-0" aria-hidden>
                  {initials[i]}
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-marfil" itemProp="name">{m.name}</h3>
                  <p className="text-sm text-volt-dim font-medium" itemProp="jobTitle">{m.role}</p>
                  <p className="text-xs text-marfil/40 mt-0.5">{m.focus}</p>
                </div>
              </div>

              {/* Quote */}
              <blockquote className="border-l-2 border-volt/30 pl-4">
                <p className="text-marfil/70 italic text-sm leading-relaxed" itemProp="description">"{m.quote}"</p>
              </blockquote>

              {/* Bio */}
              <p className="text-sm text-marfil/50 leading-relaxed flex-1">{m.bio}</p>

              {/* Divider */}
              <div className="h-px bg-white/[0.05]" />

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {(i === 0
                  ? ['Estrategia comercial', 'CRM', 'Sales pipeline', 'Go-to-market']
                  : ['Operaciones', 'Procesos', 'ERP', 'Gestión de equipos']
                ).map((skill) => (
                  <span key={skill} className="text-xs px-2.5 py-1 rounded-full bg-white/[0.05] border border-white/[0.07] text-marfil/50">{skill}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div initial={{ opacity: 0 }} animate={inView ? { opacity: 1, transition: { delay: 0.5 } } : {}} className="mt-10 text-center">
          <Link href={ROUTES.nosotros} className="btn-ghost">{t('cta')}</Link>
        </motion.div>

        {/* Emprendedor a emprendedor note */}
        <motion.div initial={{ opacity: 0, y: 12 }} animate={inView ? { opacity: 1, y: 0, transition: { delay: 0.6 } } : {}}
          className="mt-10 p-6 rounded-xl border border-volt/10 bg-volt/[0.03] text-center">
          <p className="text-sm text-marfil/50">
            <span className="text-volt font-medium">Emprendedor a emprendedor.</span>{' '}
            Hemos operado negocios propios, fallado, ajustado y vuelto a empezar. No hablamos desde la teoría.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
