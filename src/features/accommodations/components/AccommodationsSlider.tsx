import { CarouselWithLightbox } from '@/features/carousel/CarouselWithLightbox'
import { CarouselWithLightboxSkeleton } from '@/features/carousel/CarouselWithLightboxSkeleton'
import { UploadedImage } from '@/features/shared/uploadImage/_types'
import { Container } from '@/shared/components/Container'

type AccommodationsSlider = {
  title?: string
  uploadedImages: UploadedImage[]
  isLoading: boolean
}

export const AccommodationsSlider = ({
  title,
  uploadedImages,
  isLoading
}: AccommodationsSlider) => {
  return (
    <Container>
      {isLoading && <CarouselWithLightboxSkeleton />}

      {!isLoading && uploadedImages.length > 0 && (
        <CarouselWithLightbox data={uploadedImages} title={title} />
      )}
    </Container>
  )
}
