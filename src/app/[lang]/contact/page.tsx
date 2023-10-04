import createTranslation from 'next-translate/createTranslation'
import Heading from '@/components/elements/Heading'
import Location from '@/components/modules/Location'
import OpeningHours from '@/components/modules/OpeningHours'
import Container from '@/components/elements/Container'

export default function Contact() {
  const { t } = createTranslation('contact')

  return (
    <Container>
      <Heading level={1} className='my-8'>
        {t('restaurantsMainTitle')}
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
