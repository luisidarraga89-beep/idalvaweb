import { setRequestLocale } from 'next-intl/server'
import { HomeClient } from './HomeClient'

export default function HomePage({ params: { locale } }: { params: { locale: string } }) {
  // Required for static rendering with next-intl
  setRequestLocale(locale)
  return <HomeClient />
}
