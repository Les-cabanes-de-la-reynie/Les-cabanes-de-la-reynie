import { unstable_setRequestLocale } from 'next-intl/server'
import AccommodationsHeader from '@/components/modules/Accommodations/AccommodationsHeader'
import PracticalInformation from '@/components/modules/PracticalInformation'
import Accommodations from '@/components/modules/Accommodations'
import { getUploadedImages } from '@/services/queries/uploadedImages'
import { UploadImageCategoryKeyEnum } from '@/_types/uploadImage'

const Yourte = async ({
  params: { locale }
}: {
  params: { locale: string }
}) => {
  unstable_setRequestLocale(locale)

  const bookList = [
    { title: 'Airbnb', href: 'https://www.airbnb.fr/' },
    { title: 'Airbnb 2', href: 'https://www.airbnb.fr/' },
    { title: 'Airbnb 3', href: 'https://www.airbnb.fr/' }
  ]

  const yurtHeaderImages = await getUploadedImages(
    UploadImageCategoryKeyEnum.YurtHeader
  )
  const lastYurtHeaderImage = yurtHeaderImages.at(-1)

  return (
    <main className='w-full'>
      <AccommodationsHeader
        headerImageUrl={lastYurtHeaderImage?.imageUrl ?? ''}
        title='Yourte'
        bookList={bookList}
      />
      <PracticalInformation />
      <Accommodations />
    </main>
  )
}

export default Yourte
