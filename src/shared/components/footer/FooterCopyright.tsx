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
    <p className='px-4 py-2 text-center text-sm md:px-6'>
      © <CurrentYear /> <b>{ESTABLISHMENT_TITLE.toLocaleUpperCase()}</b> |{' '}
      {t('allRightsReserved')} | {t('developedBy')}{' '}
      <Link
        href='https://github.com/davidbourrel'
        className='font-bold hover:underline'
        target='_blank'
        rel='noopener noreferrer'
      >
        David Bourrel
      </Link>
    </p>
  )
}
