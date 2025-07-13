import { Suspense } from 'react'
import { CarouselWithLightboxSkeleton } from '../carousel/CarouselWithLightboxSkeleton'
import { UploadImageCategoryKeyEnum } from '../shared/uploadImage/types'
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
    <Suspense fallback={<CarouselWithLightboxSkeleton />}>
      <AccommodationsSlider title={title} category={category} />
    </Suspense>
  )
}
