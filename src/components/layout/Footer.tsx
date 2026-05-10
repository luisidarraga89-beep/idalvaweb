'use client'
import Link from 'next/link'
import { useTranslations } from 'next-intl'
import { Lockup } from '@/components/ui/Isotipo'
import { ROUTES, BRAND } from '@/lib/utils'

export function Footer({ onOpenContact }: { onOpenContact: () => void }) {
  const t = useTranslations('footer')
  const services = [
    { label: 'Estructura Operativa',    href: ROUTES.estructuraOp    },
    { label: 'CRM y Gestión Comercial', href: ROUTES.crm             },
    { label: 'ERP y Control',           href: ROUTES.erp             },
    { label: 'Automatización',          href: ROUTES.automatizacion  },
    { label: 'Dirección Estratégica',   href: ROUTES.direccion       },
    { label: 'HORECA',                  href: ROUTES.horeca          },
  ]

  return (
    <footer className="bg-grafito-mid border-t border-white/[0.06]" role="contentinfo">
      <div className="section-wrapper py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <Lockup isoSize={32} wmSize="sm" animated={false} showTag />
            <p className="text-sm text-marfil/40 leading-relaxed max-w-xs">
              Firma de estructura operativa y escalabilidad para PYMES. Vilanova i la Geltrú, Barcelona.
            </p>
          </div>

          {/* Services */}
          <div>
            <p className="text-xs font-semibold text-marfil/30 uppercase tracking-widest mb-4">Servicios</p>
            <ul className="flex flex-col gap-2.5" role="list">
              {services.map(s => (
                <li key={s.href}>
                  <Link href={s.href} className="text-sm text-marfil/50 hover:text-marfil transition-colors duration-150">{s.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-xs font-semibold text-marfil/30 uppercase tracking-widest mb-4">Contacto</p>
            <ul className="flex flex-col gap-3 text-sm text-marfil/50" role="list">
              <li><a href={`mailto:${BRAND.email}`} className="hover:text-marfil transition-colors duration-150">{BRAND.email}</a></li>
              <li><a href={`tel:${BRAND.phone.replace(/\s/g,'')}`} className="hover:text-marfil transition-colors duration-150">{BRAND.phone}</a></li>
              <li><a href={BRAND.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-marfil transition-colors duration-150">LinkedIn →</a></li>
              <li className="pt-1">
                <button onClick={onOpenContact} className="btn-volt text-xs px-4 py-2">Agendar diagnóstico</button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-marfil/25">{t('copyright')}</p>
          <div className="flex gap-6">
            <Link href="/aviso-legal"           className="text-xs text-marfil/25 hover:text-marfil/50 transition-colors">Aviso legal</Link>
            <Link href="/politica-privacidad"   className="text-xs text-marfil/25 hover:text-marfil/50 transition-colors">Privacidad</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
