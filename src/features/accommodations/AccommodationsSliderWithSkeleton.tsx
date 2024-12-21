import { Container } from '@/components/Container'
import { Suspense } from 'react'
import { CarouselWithLightboxSkeleton } from '../carousel/CarouselWithLightboxSkeleton'
import { UploadImageCategoryKeyEnum } from '../common/uploadImage/types'
import { AccommodationsSlider } from './AccommodationsSlider'

type AccommodationsSliderWithSkeletonProps = {
  category: UploadImageCategoryKeyEnum
}

export const AccommodationsSliderWithSkeleton = ({
  category
}: AccommodationsSliderWithSkeletonProps) => {
  return (
    <Container>
      <Suspense fallback={<CarouselWithLightboxSkeleton />}>
        <AccommodationsSlider category={category} />
      </Suspense>
    </Container>
  )
}
