'use client'

import { getYurtSliderImagesOptions } from '@/features/shared/uploadImage/infrastructure/getUploadedImagesByCategoryOption'
import { useQuery } from '@tanstack/react-query'
import { useTranslations } from 'next-intl'
import { AccommodationsSlider } from '../components/AccommodationsSlider'

export const YurtAccommodationSlider = () => {
  const tYurt = useTranslations('Yurt')

  const { data: uploadedImages = [], isLoading } = useQuery(
    getYurtSliderImagesOptions
  )

  return (
    <AccommodationsSlider
      title={tYurt('sliderTitle')}
      uploadedImages={uploadedImages}
      isLoading={isLoading}
    />
  )
}
