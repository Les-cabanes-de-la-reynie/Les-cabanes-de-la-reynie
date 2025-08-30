'use client'

import { getCabinSliderImagesOptions } from '@/features/shared/uploadImage/infrastructure/getUploadedImagesByCategoryOption'
import { useQuery } from '@tanstack/react-query'
import { useTranslations } from 'next-intl'
import { AccommodationsSlider } from '../components/AccommodationsSlider'

export const CabinAccommodationSlider = () => {
  const tCabin = useTranslations('Cabin')

  const { data: uploadedImages = [], isLoading } = useQuery(
    getCabinSliderImagesOptions
  )

  return (
    <AccommodationsSlider
      title={tCabin('sliderTitle')}
      uploadedImages={uploadedImages}
      isLoading={isLoading}
    />
  )
}
