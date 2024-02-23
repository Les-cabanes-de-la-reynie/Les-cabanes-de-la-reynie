import Heading from '@/components/elements/Heading'
import Loader from '@/components/elements/Loader'
import P from '@/components/elements/P'
import { useTranslations } from 'next-intl'
import { Suspense } from 'react'
import AddressInformation from '.'

const AddressInformationSection = () => {
  const t = useTranslations('Admin')

  return (
    <section className='mb-8'>
      <Heading level={2} className='my-8'>
        {t('personnalInformation')}
      </Heading>

      <P className='mb-5'>{t('personnalInformationDescription')}</P>

      <Suspense fallback={<Loader />}>
        <AddressInformation />
      </Suspense>
    </section>
  )
}
export default AddressInformationSection
