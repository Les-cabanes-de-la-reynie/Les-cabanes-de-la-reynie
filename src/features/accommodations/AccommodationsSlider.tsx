import { CarouselWithLightbox } from '@/features/carousel/CarouselWithLightbox'
import { getUploadedImagesByCategory } from '@/features/shared/uploadImage/infrastructure/getUploadedImagesByCategory'
import { Container } from '@/shared/components/Container'
import { UploadImageCategoryKeyEnum } from '../shared/uploadImage/types'

type AccommodationsSliderProps = {
  title?: string
  category: UploadImageCategoryKeyEnum
}

export const AccommodationsSlider = async ({
  title,
  category
}: AccommodationsSliderProps) => {
  const uploadedImages = await getUploadedImagesByCategory({ category })

  return uploadedImages?.length ? (
    <Container>
      <CarouselWithLightbox data={uploadedImages} title={title} />
    </Container>
  ) : null
}
