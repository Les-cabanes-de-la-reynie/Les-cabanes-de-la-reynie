'use client'

import { useQuery } from '@tanstack/react-query'
import { useTranslations } from 'next-intl'
import { UploadImageCategoryKeyEnum } from '../shared/uploadImage/_types'
import { getUploadedImagesByCategoryOption } from '../shared/uploadImage/infrastructure/getUploadedImagesByCategoryOption'
import { AccommodationsSlider } from './components/AccommodationsSlider'

export const HomeAccommodationSlider = () => {
  const tHome = useTranslations('Home')

  const { data: uploadedImages = [], isLoading } = useQuery({
    ...getUploadedImagesByCategoryOption,
    meta: {
      category: UploadImageCategoryKeyEnum.HomeSlider
    }
  })

  return (
    <AccommodationsSlider
      title={tHome('sliderTitle')}
      uploadedImages={uploadedImages}
      isLoading={isLoading}
    />
  )
}
