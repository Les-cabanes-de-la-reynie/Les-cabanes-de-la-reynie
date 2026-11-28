import { Link } from '@/i18n/navigation'
import { cn } from '@/shared/utils/tailwind'
import { getTranslations } from 'next-intl/server'
import { LEGAL_DOCUMENTS } from '../_constants'
import { LegalDocumentKey } from '../_types'

// The three documents: wrapping pills on phones, a vertical list in the desktop rail
export const LegalNav = async ({ current }: { current: LegalDocumentKey }) => {
  const t = await getTranslations('Legal')

  return (
    <nav aria-label={t('navLabel')}>
      <ul className='flex flex-wrap gap-2 lg:flex-col lg:gap-1'>
        {LEGAL_DOCUMENTS.map(({ key, href }) => {
          const isCurrent = key === current

          return (
            <li key={key}>
              <Link
                href={href}
                aria-current={isCurrent ? 'page' : undefined}
                data-testid={`legal-nav-${key}`}
                className={cn(
                  'flex min-h-11 items-center rounded-[10px] border px-3.5 text-[15px] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring lg:border-transparent',
                  isCurrent
                    ? 'border-transparent bg-accent font-semibold text-accent-foreground'
                    : 'border-border text-muted-foreground hover:bg-accent/60 hover:text-foreground'
                )}
              >
                {t(`documents.${key}`)}
              </Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
