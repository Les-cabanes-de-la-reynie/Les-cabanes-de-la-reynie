import { UploadedImage } from '@/features/shared/uploadImage/_types'
import { CarouselWithLightboxSkeleton } from '@/shared/components/carousel/CarouselWithLightboxSkeleton'
import { Container } from '@/shared/components/Container'
import dynamic from 'next/dynamic'

type AccommodationsSliderProps = {
  title?: string
  uploadedImages: UploadedImage[]
  isLoading: boolean
}

const CarouselWithLightbox = dynamic(
  () =>
    import('@/shared/components/carousel/CarouselWithLightbox').then(
      mod => mod.CarouselWithLightbox
    ),
  { loading: () => <CarouselWithLightboxSkeleton /> }
)

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
