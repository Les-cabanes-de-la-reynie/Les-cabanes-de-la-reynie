import { ESTABLISHMENT_TITLE } from '@/shared/_constants/establishmentInformation'
import { useTranslations } from 'next-intl'
import { cacheLife } from 'next/cache'
import Link from 'next/link'

// Cached: a bare new Date() would make every page render per request
const CurrentYear = async () => {
  'use cache'
  cacheLife('days')

  return new Date().getFullYear()
}

export const FooterCopyright = () => {
  const t = useTranslations('Footer')

  return (
    // Stacked on phones, where a wrapped separator would end a line
    <p className='flex flex-col gap-1 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-2'>
      <span>
        © <CurrentYear /> {ESTABLISHMENT_TITLE}
      </span>
      <span aria-hidden='true' className='hidden sm:inline'>
        ·
      </span>
      <span>{t('allRightsReserved')}</span>
      <span aria-hidden='true' className='hidden sm:inline'>
        ·
      </span>
      <span>
        {t('developedBy')}{' '}
        <Link
          href='https://github.com/davidbourrel'
          className='rounded-xs underline decoration-white/40 underline-offset-4 transition-colors hover:text-white hover:decoration-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white'
          target='_blank'
          rel='noopener noreferrer'
        >
          David Bourrel
        </Link>
      </span>
    </p>
  )
}
