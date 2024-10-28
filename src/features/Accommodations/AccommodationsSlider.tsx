import { CarouselWithLightbox } from '@/features/carousel/CarouselWithLightbox'
import { getUploadedImagesByCategory } from '@/services/queries/uploadedImagesByCategory'
import { unstable_noStore } from 'next/cache'
import { UploadImageCategoryKeyEnum } from '../common/uploadImage/types'

type AccommodationsSliderProps = {
  category: UploadImageCategoryKeyEnum
}

export const AccommodationsSlider = async ({
  category
}: AccommodationsSliderProps) => {
  unstable_noStore()
  const images = await getUploadedImagesByCategory({ category })

  return images?.length ? (
    <section className='mx-auto w-full max-w-screen-2xl py-8'>
      <CarouselWithLightbox data={images} category={category} />
    </section>
  ) : null
}
