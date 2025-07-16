import { UploadImageCategoryKeyEnum } from '@/features/shared/uploadImage/types'
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
    // <Suspense fallback={<CarouselWithLightboxSkeleton />}>
    <AccommodationsSlider title={title} category={category} />
    // </Suspense>
  )
}
