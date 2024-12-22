import { Container } from '@/components/Container'
import { Suspense } from 'react'
import { CarouselWithLightboxSkeleton } from '../carousel/CarouselWithLightboxSkeleton'
import { UploadImageCategoryKeyEnum } from '../common/uploadImage/types'
import { AccommodationsSlider } from './AccommodationsSlider'

type AccommodationsSliderWithSkeletonProps = {
  title?: string
  category: UploadImageCategoryKeyEnum
}

export const AccommodationsSliderWithSkeleton = ({
  title,
  category
}: AccommodationsSliderWithSkeletonProps) => {
  return (
    <Container>
      <Suspense fallback={<CarouselWithLightboxSkeleton />}>
        <AccommodationsSlider title={title} category={category} />
      </Suspense>
    </Container>
  )
}
