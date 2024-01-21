import Link from 'next/link'
import { useTranslations } from 'next-intl'
import { format } from 'date-fns'
import { ESTABLISHMENT_TITLE } from '@/_constants/establishmentInformation'

const FooterCopyright = () => {
  const t = useTranslations('Footer')

  const year = format(new Date(), 'y')

  return (
    <p className='px-4 text-center md:px-6'>
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
