'use client'
import { useState } from 'react'
import { Navbar }        from '@/components/layout/Navbar'
import { HeroSection }   from '@/components/sections/Hero'
import { MarqueeTicker } from '@/components/ui/Marquee'
import { ProblemSection }    from '@/components/sections/Problem'
import { MethodSection }     from '@/components/sections/Method'
import { HorecaSection }     from '@/components/sections/Horeca'
import { ImpactNumbers }     from '@/components/sections/Impact'
import { TeamSection }       from '@/components/sections/Team'
import { CtaFinal }          from '@/components/sections/CtaFinal'
import { Footer }            from '@/components/layout/Footer'
import { ContactModal }      from '@/components/ui/ContactModal'

export function HomeClient() {
  const [contactOpen, setContactOpen] = useState(false)
  const open  = () => setContactOpen(true)
  const close = () => setContactOpen(false)

  return (
    <>
      <Navbar onOpenContact={open} />
      <main id="main-content">
        <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:btn-volt focus:text-sm">
          Saltar al contenido principal
        </a>
        <HeroSection    onOpenContact={open} />
        <MarqueeTicker />
        <ProblemSection />
        <MethodSection  />
        <HorecaSection  />
        <ImpactNumbers  />
        <TeamSection    />
        <CtaFinal       onOpenContact={open} />
      </main>
      <Footer onOpenContact={open} />
      <ContactModal open={contactOpen} onClose={close} />
    </>
  )
}
