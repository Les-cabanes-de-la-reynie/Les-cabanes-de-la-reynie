'use client'

import { UploadImageCategoryKeyEnum } from '@/features/shared/uploadImage/_types'
import { getUploadedImagesByCategoryOption } from '@/features/shared/uploadImage/infrastructure/getUploadedImagesByCategoryOption'
import { useQuery } from '@tanstack/react-query'
import { useTranslations } from 'next-intl'
import { AccommodationsSliderWithSkeleton } from '../components/AccommodationsSliderWithSkeleton'

export const YurtAccommodationSlider = () => {
  const tYurt = useTranslations('Yurt')

  const { data: uploadedImages = [], isLoading } = useQuery({
    ...getUploadedImagesByCategoryOption,
    meta: {
      category: UploadImageCategoryKeyEnum.YurtSlider
    }
  })

  return (
    <AccommodationsSliderWithSkeleton
      title={tYurt('sliderTitle')}
      uploadedImages={uploadedImages}
      isLoading={isLoading}
    />
  )
}
