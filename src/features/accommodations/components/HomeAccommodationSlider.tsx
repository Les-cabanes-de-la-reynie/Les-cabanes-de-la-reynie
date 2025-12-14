'use client'

import { UploadImageCategoryKeyEnum } from '@/features/shared/uploadImage/_types'
import { getUploadedImagesByCategory } from '@/features/shared/uploadImage/infrastructure/queries/getUploadedImagesByCategory'
import { useTranslations } from 'next-intl'
import { AccommodationsSlider } from './AccommodationsSlider'

export const HomeAccommodationSlider = async () => {
  const tHome = useTranslations('Home')

  const uploadedImages = await getUploadedImagesByCategory(
    UploadImageCategoryKeyEnum.HomeSlider
  )

  return (
    <AccommodationsSlider
      title={tHome('sliderTitle')}
      uploadedImages={uploadedImages}
      isLoading={false}
    />
  )
}
