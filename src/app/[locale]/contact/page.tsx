import { useTranslations } from 'next-intl'
import { unstable_setRequestLocale } from 'next-intl/server'
import Heading from '@/components/elements/Heading'
import Location from '@/components/modules/Location'
import OpeningHours from '@/components/modules/OpeningHours'
import Container from '@/components/elements/Container'

const Contact = ({ params: { locale } }: { params: { locale: string } }) => {
  unstable_setRequestLocale(locale)

  const t = useTranslations('Contact')

  return (
    <Container>
      <Heading level={1} className='my-8'>
        {t('contactMainTitle')}
      </Heading>
      <div className='grid grid-cols-1 gap-8 lg:grid-cols-2'>
        <section className='flex w-full flex-col gap-4 lg:mb-0'>
          <Heading level={2}>{t('location')}</Heading>
          <Location />
        </section>
        <section className='flex w-full flex-col gap-4 lg:mb-0'>
          <Heading level={2}>{t('openingHours')}</Heading>
          <OpeningHours />
        </section>
      </div>
    </Container>
  )
}

export default Contact
