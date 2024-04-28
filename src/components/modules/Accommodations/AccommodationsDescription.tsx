import Container from '@/components/elements/Container'
import Heading from '@/components/elements/Heading'
import P from '@/components/elements/P'
import { useLocale, useTranslations } from 'next-intl'
import Link from 'next/link'

const AccommodationsDescription = () => {
  const t = useTranslations('Home')
  const t2 = useTranslations('Common')
  const lang = useLocale()

  return (
    <Container>
      <div className=' w-full'>
        <Heading level={3}>{t('accommodationsTitle')}</Heading>
        <P>{t('accommodationsP1')}</P>
        <P>
          {t('accommodationsP2-1')}
          <Link
            href={`/${lang}/logements/yourte`}
            className='mx-1 lowercase text-primary underline decoration-primary'
          >
            {t2('yurt')},
          </Link>
          {t('accommodationsP2-2')}
          <Link
            href={`/${lang}/logements/cabane`}
            className='mx-1 lowercase text-primary underline decoration-primary'
          >
            {t2('hut')},
          </Link>
          {t('accommodationsP2-3')}
        </P>
      </div>
    </Container>
  )
}
export default AccommodationsDescription
