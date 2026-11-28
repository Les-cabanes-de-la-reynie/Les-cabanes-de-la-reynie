import { Address } from '@/features/address/_types'
import { Locale } from '@/i18n/routing'
import { ReactNode } from 'react'
import { LEGAL_DOCUMENTS } from './_constants'

export type LegalDocumentKey = (typeof LEGAL_DOCUMENTS)[number]['key']

export type LegalSection = {
  id: string
  title: string
  body: ReactNode
}

export type LegalContent = {
  intro: ReactNode
  sections: LegalSection[]
}

// What the documents quote from the admin-edited data and the deployment
export type LegalContext = {
  address: Address
  siteHost: string
}

export type LegalDocumentContent = Record<
  Locale,
  (context: LegalContext) => LegalContent
>
