'use client'

import { UploadImageCategoryKeyEnum } from '@/features/shared/uploadImage/_types'
import { getUploadedImagesByCategory } from '@/features/shared/uploadImage/infrastructure/queries/getUploadedImagesByCategory'
import { useTranslations } from 'next-intl'
import { AccommodationsSlider } from '../../components/AccommodationsSlider'

export const YurtAccommodationSlider = async () => {
  const tYurt = useTranslations('Yurt')

  const uploadedImages = await getUploadedImagesByCategory(
    UploadImageCategoryKeyEnum.YurtSlider
  )

  return (
    <AccommodationsSlider
      title={tYurt('sliderTitle')}
      uploadedImages={uploadedImages}
      isLoading={false}
    />
  )
}
