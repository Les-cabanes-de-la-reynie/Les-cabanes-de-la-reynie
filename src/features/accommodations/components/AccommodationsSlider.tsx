import { CarouselWithLightboxSkeleton } from '@/features/carousel/CarouselWithLightboxSkeleton'
import { UploadedImage } from '@/features/shared/uploadImage/_types'
import { Container } from '@/shared/components/Container'
import dynamic from 'next/dynamic'

const CarouselWithLightbox = dynamic(
  () =>
    import('@/features/carousel/CarouselWithLightbox').then(
      mod => mod.CarouselWithLightbox
    ),
  { loading: () => <CarouselWithLightboxSkeleton /> }
)

type AccommodationsSliderProps = {
  title?: string
  uploadedImages: UploadedImage[]
  isLoading: boolean
}

export const AccommodationsSlider = ({
  title,
  uploadedImages,
  isLoading
}: AccommodationsSliderProps) => {
  return (
    <Container>
      {isLoading && <CarouselWithLightboxSkeleton />}

      {!isLoading && uploadedImages.length > 0 && (
        <CarouselWithLightbox data={uploadedImages} title={title} />
      )}
    </Container>
  )
}
