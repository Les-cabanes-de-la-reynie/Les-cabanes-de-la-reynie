import { CarouselWithLightboxSkeleton } from '@/features/carousel/CarouselWithLightboxSkeleton'
import { UploadedImage } from '@/features/shared/uploadImage/_types'
import { Container } from '@/shared/components/Container'
import { AccommodationsSlider } from './AccommodationsSlider'

type AccommodationsSliderWithSkeletonProps = {
  title?: string
  uploadedImages: UploadedImage[]
  isLoading: boolean
}

export const AccommodationsSliderWithSkeleton = ({
  title,
  uploadedImages,
  isLoading
}: AccommodationsSliderWithSkeletonProps) => {
  return (
    <Container>
      {isLoading ? (
        <CarouselWithLightboxSkeleton />
      ) : (
        <AccommodationsSlider title={title} uploadedImages={uploadedImages} />
      )}
    </Container>
  )
}
