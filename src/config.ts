import { Pathnames } from 'next-intl/navigation'

export const locales = ['fr', 'en'] as const

export const pathnames = {
  '/': '/',
  '/pathnames': {
    fr: '/nomsdechemin',
    en: '/pathnames'
  }
} satisfies Pathnames<typeof locales>

export type AppPathnames = keyof typeof pathnames
