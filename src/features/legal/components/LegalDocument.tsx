import { getAddress } from '@/features/address/infrastructure/queries/getAddress'
import { Locale, routing } from '@/i18n/routing'
import { Container } from '@/shared/components/Container'
import { Heading } from '@/shared/components/Heading'
import { env } from '@/shared/lib/env'
import { getLocale, getTranslations } from 'next-intl/server'
import { LEGAL_UPDATED_AT } from '../_constants'
import { LegalDocumentContent, LegalDocumentKey } from '../_types'
import { legalNotice } from '../content/legalNotice'
import { privacyPolicy } from '../content/privacyPolicy'
import { termsOfUse } from '../content/termsOfUse'
import { LegalNav } from './LegalNav'

const CONTENT: Record<LegalDocumentKey, LegalDocumentContent> = {
  notice: legalNotice,
  terms: termsOfUse,
  privacy: privacyPolicy
}

// Desktop: a sticky rail (documents, then this page's sections) beside a 68ch column
export const LegalDocument = async ({
  document
}: {
  document: LegalDocumentKey
}) => {
  const locale = (await getLocale()) as Locale
  const t = await getTranslations('Legal')
  const address = await getAddress()

  const { intro, sections } = CONTENT[document][locale]({
    address,
    siteHost: new URL(env.NEXT_PUBLIC_BASE_URL).host
  })
  const updatedAt = new Intl.DateTimeFormat(locale, {
    dateStyle: 'long',
    timeZone: 'Europe/Paris'
  }).format(new Date(`${LEGAL_UPDATED_AT}T12:00:00Z`))

  return (
    <Container className='lg:grid lg:grid-cols-[15rem_minmax(0,1fr)] lg:gap-16'>
      <aside className='mb-10 lg:sticky lg:top-24 lg:mb-0 lg:self-start'>
        <LegalNav current={document} />

        <nav aria-label={t('onThisPage')} className='mt-10 hidden lg:block'>
          <p className='mb-3 px-3.5 text-sm font-semibold text-muted-foreground'>
            {t('onThisPage')}
          </p>
          <ul className='space-y-1'>
            {sections.map(({ id, title }) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  className='block rounded-[10px] px-3.5 py-1.5 text-sm text-muted-foreground transition-colors hover:bg-accent/60 hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring'
                >
                  {title}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </aside>

      <article className='min-w-0 max-w-[68ch]' data-testid='legal-document'>
        <header>
          <Heading level={1}>{t(`documents.${document}`)}</Heading>
          <p className='mt-3 text-sm text-muted-foreground'>
            {t('lastUpdate', { date: updatedAt })}
          </p>
          {locale !== routing.defaultLocale && (
            <p className='mt-1 text-sm text-muted-foreground'>
              {t('translationNote')}
            </p>
          )}
          <div className='mt-6 space-y-3 text-lead text-pretty'>{intro}</div>
        </header>

        {sections.map(({ id, title, body }) => (
          <section key={id} className='mt-12'>
            <h2
              id={id}
              className='scroll-mt-28 text-2xl font-semibold tracking-[-0.01em] text-balance'
            >
              {title}
            </h2>
            <div className='mt-4 space-y-4 text-body text-pretty'>{body}</div>
          </section>
        ))}
      </article>
    </Container>
  )
}
