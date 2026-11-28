import { pageAlternates } from '@/shared/lib/seo'
import { Metadata } from 'next'
import { getLocale, getTranslations } from 'next-intl/server'
import { LEGAL_DOCUMENTS } from './_constants'
import { LegalDocumentKey } from './_types'

export const legalMetadata = async (
  document: LegalDocumentKey
): Promise<Metadata> => {
  const locale = await getLocale()
  const t = await getTranslations('Legal')
  const tSEO = await getTranslations('SEO')
  const { href } = LEGAL_DOCUMENTS.find(({ key }) => key === document)!

  return {
    title: t(`documents.${document}`),
    description: tSEO(`legal.${document}.description`),
    alternates: pageAlternates(locale, href)
  }
}
