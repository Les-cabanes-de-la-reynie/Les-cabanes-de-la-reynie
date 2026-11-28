import { PAGE_ROUTES } from '@/shared/_constants/page'

// Operator named by the legal notice, to fill in before going live:
// an empty field shows a "to complete" marker on the legal pages
export const PUBLISHER = {
  name: '',
  legalStatus: '',
  siret: '',
  publicationDirector: '',
  // Registered office or home address: the place's street stays private
  address: ''
}

export const HOST = {
  name: 'Vercel Inc.',
  address: '440 N Barranca Avenue #4133, Covina, CA 91723',
  // Vercel publishes no phone number: confirm one with them before launch
  phone: '',
  contactUrl: 'https://vercel.com/contact'
}

// "Last updated" date of the three documents
export const LEGAL_UPDATED_AT = '2026-11-28'

export const LEGAL_DOCUMENTS = [
  { key: 'notice', href: PAGE_ROUTES.legal.notice },
  { key: 'terms', href: PAGE_ROUTES.legal.terms },
  { key: 'privacy', href: PAGE_ROUTES.legal.privacy }
] as const
