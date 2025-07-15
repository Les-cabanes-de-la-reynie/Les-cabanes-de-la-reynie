import { CarouselWithLightboxSkeleton } from '@/features/carousel/CarouselWithLightboxSkeleton'
import { UploadImageCategoryKeyEnum } from '@/features/shared/uploadImage/types'
import { Suspense } from 'react'
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
