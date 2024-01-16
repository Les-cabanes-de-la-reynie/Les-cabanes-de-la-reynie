import { useTranslations } from 'next-intl'
import { unstable_setRequestLocale } from 'next-intl/server'
import AccommodationsHeader from '@/components/modules/Accommodations/AccommodationsHeader'
import PracticalInformation from '@/components/modules/PracticalInformation'
import Accommodations from '@/components/modules/Accommodations'
import { UploadImageCategoryKeyEnum } from '@/_types/uploadImage'

const Yurt = ({ params: { locale } }: { params: { locale: string } }) => {
  unstable_setRequestLocale(locale)

  const t = useTranslations('Common')

  const bookList = [
    { title: 'Airbnb', href: 'https://www.airbnb.fr/' },
    { title: 'Airbnb 2', href: 'https://www.airbnb.fr/' },
    { title: 'Airbnb 3', href: 'https://www.airbnb.fr/' }
  ]

  return (
    <main className='w-full'>
      <AccommodationsHeader
        title={t('yurt')}
        uploadImageCategoryKey={UploadImageCategoryKeyEnum.YurtHeader}
        bookList={bookList}
      />
      <PracticalInformation />

      <Accommodations category={UploadImageCategoryKeyEnum.YurtSlider} />
    </main>
  )
}

export default Yurt
