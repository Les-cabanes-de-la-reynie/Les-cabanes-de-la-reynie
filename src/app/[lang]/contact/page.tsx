import useTranslation from 'next-translate/useTranslation'
import Heading from '@/components/elements/Heading'
import Location from '@/components/modules/Location'
import OpeningHours from '@/components/modules/OpeningHours'

export default function Contact() {
  const { t } = useTranslation('contact')

  return (
    <div className='container mb-8 w-full'>
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
    </div>
  )
}
