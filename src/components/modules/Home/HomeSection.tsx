import Heading from '@/components/elements/Heading'
import { useTranslations } from 'next-intl'
import Home from '.'

const HomeSection = () => {
  const t = useTranslations('Common')
  return (
    <section className='mb-8'>
      <Heading level={2} className='my-8'>
        {t('home')}
      </Heading>

      <Home homeUploadImageTitle={t('uploadImage')} />
    </section>
  )
}
export default HomeSection
