import { defineRouting } from 'next-intl/routing'

export const locales = ['fr', 'en'] as const
export type Locale = (typeof locales)[number]

export const routing = defineRouting({
  locales,
  defaultLocale: 'fr',
  pathnames: {
    '/': '/',
    '/contact': '/contact',
    '/logements/cabane': {
      fr: '/logements/cabane',
      en: '/accommodations/cabin'
    },
    '/logements/yourte': {
      fr: '/logements/yourte',
      en: '/accommodations/yurt'
    },
    '/activites': {
      fr: '/activites',
      en: '/activities'
    },
    '/activites/1': {
      fr: '/activites/1',
      en: '/activities/1'
    },
    '/activites/2': {
      fr: '/activites/2',
      en: '/activities/2'
    },
    '/activites/3': {
      fr: '/activites/3',
      en: '/activities/3'
    },
    '/admin': '/admin',
    '/admin/auth/sign-in': '/admin/auth/sign-in'
  }
})
