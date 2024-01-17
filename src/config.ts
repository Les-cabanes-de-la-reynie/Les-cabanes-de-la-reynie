import { Pathnames } from 'next-intl/navigation'
import { env } from './lib/env'

export const locales = env.NEXT_PUBLIC_LANGS

export const pathnames = {
  '/': '/',
  '/pathnames': {
    fr: '/nomsdechemin',
    en: '/pathnames'
  }
} satisfies Pathnames<typeof locales>

export type AppPathnames = keyof typeof pathnames
