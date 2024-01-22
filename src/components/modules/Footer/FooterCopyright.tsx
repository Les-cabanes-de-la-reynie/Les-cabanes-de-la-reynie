import { ESTABLISHMENT_TITLE } from '@/_constants/establishmentInformation'
import { format } from 'date-fns'
import { useTranslations } from 'next-intl'
import Link from 'next/link'

const FooterCopyright = () => {
  const t = useTranslations('Footer')

  const year = format(new Date(), 'y')

  return (
    <p className='px-4 text-center text-sm md:px-6'>
      © {year} <b>{ESTABLISHMENT_TITLE.toLocaleUpperCase()}</b> |{' '}
      {t('allRightsReserved')} | {t('developedBy')}
      <Link
        href='https://github.com/davidbourrel'
        className='ml-1 font-bold hover:underline'
        target='_blank'
        rel='noopener noreferrer'
      >
        David Bourrel
      </Link>
    </p>
  )
}
export default FooterCopyright
