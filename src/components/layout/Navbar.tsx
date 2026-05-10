'use client'
import { useState, useEffect, useCallback } from 'react'
import Link from 'next/link'
import { useTranslations } from 'next-intl'
import { motion, AnimatePresence } from 'framer-motion'
import { Lockup } from '@/components/ui/Isotipo'
import { cn, ROUTES } from '@/lib/utils'

export function Navbar({ onOpenContact }: { onOpenContact: () => void }) {
  const t = useTranslations('nav')
  const [visible,    setVisible]    = useState(true)
  const [scrolled,   setScrolled]   = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [lastY,      setLastY]      = useState(0)

  const handleScroll = useCallback(() => {
    const y = window.scrollY
    setScrolled(y > 20)
    if (y < 80) { setVisible(true); setLastY(y); return }
    setVisible(y < lastY); setLastY(y)
  }, [lastY])

  useEffect(() => { window.addEventListener('scroll', handleScroll, { passive: true }); return () => window.removeEventListener('scroll', handleScroll) }, [handleScroll])
  useEffect(() => { const fn = (e: KeyboardEvent) => { if (e.key === 'Escape') setMobileOpen(false) }; window.addEventListener('keydown', fn); return () => window.removeEventListener('keydown', fn) }, [])

  const links = [
    { label: t('services'), href: '#servicios' },
    { label: t('method'),   href: '#metodo'    },
    { label: t('about'),    href: ROUTES.nosotros },
    { label: t('horeca'),   href: ROUTES.horeca },
  ]

  return (
    <motion.header
      initial={{ y: 0, opacity: 1 }}
      animate={{ y: visible ? 0 : -80, opacity: visible ? 1 : 0 }}
      transition={{ duration: 0.2, ease: 'easeInOut' }}
      className={cn('fixed top-0 left-0 right-0 z-50 px-6 md:px-10 lg:px-16 transition-all duration-300',
        scrolled ? 'py-3 bg-grafito/90 backdrop-blur-[16px] border-b border-white/[0.06]' : 'py-5 bg-transparent')}
      role="banner">
      <nav className="mx-auto max-w-6xl flex items-center justify-between" aria-label="Navegación principal">
        <Link href="/" aria-label="idalva — inicio"><Lockup isoSize={28} wmSize="sm" animated={false} /></Link>
        <ul className="hidden md:flex items-center gap-8" role="list">
          {links.map(l => (
            <li key={l.href}>
              <Link href={l.href} className="text-sm text-marfil/60 hover:text-marfil transition-colors duration-150">{l.label}</Link>
            </li>
          ))}
        </ul>
        <div className="hidden md:flex">
          <button onClick={onOpenContact} className="btn-volt text-sm px-4 py-2" aria-label="Agendar diagnóstico con idalva">{t('cta')}</button>
        </div>
        <button className="md:hidden flex flex-col gap-1.5 p-2" onClick={() => setMobileOpen(!mobileOpen)} aria-label={mobileOpen ? 'Cerrar menú' : 'Abrir menú'} aria-expanded={mobileOpen}>
          <span className={cn('w-6 h-0.5 bg-marfil/70 transition-all duration-200', mobileOpen && 'rotate-45 translate-y-2')} />
          <span className={cn('w-6 h-0.5 bg-marfil/70 transition-all duration-200', mobileOpen && 'opacity-0')} />
          <span className={cn('w-6 h-0.5 bg-marfil/70 transition-all duration-200', mobileOpen && '-rotate-45 -translate-y-2')} />
        </button>
      </nav>
      <AnimatePresence>
        {mobileOpen && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.2 }}
            className="md:hidden overflow-hidden bg-grafito-mid border-t border-white/[0.06] mt-3 rounded-b-xl">
            <ul className="flex flex-col p-4 gap-2" role="list">
              {links.map(l => (
                <li key={l.href}><Link href={l.href} onClick={() => setMobileOpen(false)} className="block px-4 py-3 rounded-lg text-marfil/70 hover:text-marfil hover:bg-white/5 transition-all duration-150 text-sm">{l.label}</Link></li>
              ))}
              <li className="mt-2"><button onClick={() => { setMobileOpen(false); onOpenContact() }} className="btn-volt w-full justify-center text-sm">{t('cta')}</button></li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
