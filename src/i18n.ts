import { getRequestConfig } from 'next-intl/server'
import { notFound } from 'next/navigation'

export const locales = ['es', 'en', 'ca'] as const
export type Locale   = (typeof locales)[number]
export const defaultLocale: Locale = 'es'

export default getRequestConfig(async ({ requestLocale }) => {
  let locale = await requestLocale
  if (!locale || !locales.includes(locale as Locale)) {
    locale = defaultLocale
  }

  // Path relative to src/ — messages folder is at src/messages/
  const messages = (await import(`./messages/${locale}.json`)).default

  return { locale, messages }
})
