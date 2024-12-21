import { CarouselWithLightbox } from '@/features/carousel/CarouselWithLightbox'
import { getUploadedImagesByCategory } from '@/features/common/uploadImage/infrastructure/getUploadedImagesByCategory'
import { unstable_noStore } from 'next/cache'
import { UploadImageCategoryKeyEnum } from '../common/uploadImage/types'

type AccommodationsSliderProps = {
  category: UploadImageCategoryKeyEnum
}

export const AccommodationsSlider = async ({
  category
}: AccommodationsSliderProps) => {
  unstable_noStore()
  const uploadedImages = await getUploadedImagesByCategory({ category })

  return uploadedImages?.length ? (
    <CarouselWithLightbox data={uploadedImages} category={category} />
  ) : null
}
