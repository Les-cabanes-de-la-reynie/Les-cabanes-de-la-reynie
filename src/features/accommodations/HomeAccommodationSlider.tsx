'use client'

import { useQuery } from '@tanstack/react-query'
import { useTranslations } from 'next-intl'
import { getHomeSliderImagesOptions } from '../shared/uploadImage/infrastructure/getUploadedImagesByCategoryOption'
import { AccommodationsSlider } from './components/AccommodationsSlider'

export const HomeAccommodationSlider = () => {
  const tHome = useTranslations('Home')

  const { data: uploadedImages = [], isLoading } = useQuery(
    getHomeSliderImagesOptions
  )

  return (
    <AccommodationsSlider
      title={tHome('sliderTitle')}
      uploadedImages={uploadedImages}
      isLoading={isLoading}
    />
  )
}
