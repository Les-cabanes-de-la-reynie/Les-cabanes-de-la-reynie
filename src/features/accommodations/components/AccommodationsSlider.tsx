import { CarouselWithLightboxSkeleton } from '@/features/carousel/CarouselWithLightboxSkeleton'
import { Container } from '@/shared/components/Container'
import dynamic from 'next/dynamic'
import { AccommodationsSliderProps } from './_types'

const CarouselWithLightbox = dynamic(
  () =>
    import('@/features/carousel/CarouselWithLightbox').then(
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
