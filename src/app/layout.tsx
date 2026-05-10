import type { Metadata, Viewport } from 'next'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages, setRequestLocale } from 'next-intl/server'
import { notFound } from 'next/navigation'
import { locales, type Locale } from '@/i18n'
import '@/styles/globals.css'
import { SCHEMA_ORG } from '@/lib/utils'

// themeColor MUST be in viewport export (not metadata) — Next.js 14 requirement
export const viewport: Viewport = {
  themeColor:   '#0A0A0B',
  width:        'device-width',
  initialScale: 1,
}

export const metadata: Metadata = {
  title: {
    default:  'idalva · Estructura operativa y escalabilidad para PYMES | Barcelona',
    template: '%s · idalva',
  },
  description:
    'Diseñamos la estructura, los procesos y los sistemas que tu negocio necesita para crecer sin caos. Organización operativa, CRM y dirección estratégica para PYMES. Sin teoría. Con resultados.',
  keywords: ['organización empresarial','estructura operativa','caos operativo pymes','implementar CRM pymes','digitalización HORECA','escalabilidad negocios','consultoría operativa Barcelona'],
  authors:   [{ name: 'Luis Idárraga', url: 'https://idalva.es/nosotros' }, { name: 'Melissa Villegas', url: 'https://idalva.es/nosotros' }],
  creator:   'idalva',
  publisher: 'idalva',
  openGraph: {
    type:        'website',
    locale:      'es_ES',
    url:         'https://idalva.es',
    siteName:    'idalva',
    title:       'idalva · Estructura operativa y escalabilidad para PYMES',
    description: 'Diseñamos la estructura, los procesos y los sistemas que tu negocio necesita para crecer sin caos.',
    images: [{ url: 'https://idalva.es/og-image.png', width: 1200, height: 630, alt: 'idalva — Escalar sin caos. Operar sin límites.' }],
  },
  twitter: {
    card:        'summary_large_image',
    title:       'idalva · Estructura operativa para PYMES',
    description: 'Diseñamos sistemas para que tu empresa funcione con orden y pueda crecer sin caos.',
    images:      ['https://idalva.es/og-image.png'],
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
  alternates: { canonical: 'https://idalva.es', languages: { 'es': 'https://idalva.es', 'en': 'https://idalva.es/en', 'ca': 'https://idalva.es/ca', 'x-default': 'https://idalva.es' } },
  icons: {
    icon:     [{ url: '/favicon.svg', type: 'image/svg+xml' }, { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' }],
    apple:    '/apple-touch-icon.png',
    shortcut: '/favicon.ico',
  },
  manifest: '/site.webmanifest',
}

// Required for static rendering: tell Next.js all valid locales at build time
export function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

export default async function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode
  params:   { locale: string }
}) {
  if (!locales.includes(locale as Locale)) notFound()

  // Enable static rendering for this locale
  setRequestLocale(locale)

  const messages = await getMessages()

  return (
    <html lang={locale} className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA_ORG) }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="bg-grafito text-marfil antialiased">
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
