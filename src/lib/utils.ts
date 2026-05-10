import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const BRAND = {
  name:     'idalva',
  tagline:  'Escalar sin caos. Operar sin límites.',
  email:    'luisidarraga89@gmail.com',
  phone:    '+34 643 43 12 97',
  web:      'idalva.es',
  location: 'Vilanova i la Geltrú, Barcelona',
  linkedin: 'https://www.linkedin.com/in/luisalbertoidarragamedina/',
} as const

export const ROUTES = {
  home:           '/',
  estructuraOp:   '/estructura-operativa',
  crm:            '/implementacion-crm',
  erp:            '/control-operativo-erp',
  automatizacion: '/automatizacion-empresarial',
  direccion:      '/direccion-estrategica',
  horeca:         '/digitalizacion-horeca',
  nosotros:       '/nosotros',
  contacto:       '/contacto',
} as const

export const SCHEMA_ORG = {
  '@context': 'https://schema.org',
  '@type': ['Organization', 'LocalBusiness'],
  name: 'idalva',
  description: 'Firma de estructura operativa y escalabilidad para PYMES',
  url: 'https://idalva.es',
  email: 'luisidarraga89@gmail.com',
  telephone: '+34643431297',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Vilanova i la Geltrú',
    addressRegion: 'Barcelona',
    addressCountry: 'ES',
  },
  founder: [
    { '@type': 'Person', name: 'Luis Idárraga',    jobTitle: 'CEO' },
    { '@type': 'Person', name: 'Melissa Villegas', jobTitle: 'COO' },
  ],
  sameAs: ['https://www.linkedin.com/in/luisalbertoidarragamedina/'],
} as const
