import { Container } from '@/components/Container'
import { CarouselWithLightbox } from '@/features/carousel/CarouselWithLightbox'
import { getUploadedImagesByCategory } from '@/features/common/uploadImage/infrastructure/getUploadedImagesByCategory'
import { unstable_noStore } from 'next/cache'
import { UploadImageCategoryKeyEnum } from '../common/uploadImage/types'

type AccommodationsSliderProps = {
  title?: string
  category: UploadImageCategoryKeyEnum
}

export const AccommodationsSlider = async ({
  title,
  category
}: AccommodationsSliderProps) => {
  unstable_noStore()
  const uploadedImages = await getUploadedImagesByCategory({ category })

  return uploadedImages?.length ? (
    <Container>
      <CarouselWithLightbox data={uploadedImages} title={title} />
    </Container>
  ) : null
}
