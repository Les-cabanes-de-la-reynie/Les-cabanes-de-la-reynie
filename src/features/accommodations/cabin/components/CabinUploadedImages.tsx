'use client'

import { UploadImageCategoryKeyEnum } from '@/features/shared/uploadImage/_types'
import { UploadedImages } from '@/features/shared/uploadImage/components/UploadedImages'
import { getUploadedImagesByCategory } from '@/features/shared/uploadImage/infrastructure/queries/getUploadedImagesByCategory'

export const CabinUploadedImages = async () => {
  const uploadedImages = await getUploadedImagesByCategory(
    UploadImageCategoryKeyEnum.CabinSlider
  )

  return (
    <UploadedImages
      categoryKey={UploadImageCategoryKeyEnum.CabinSlider}
      images={uploadedImages}
    />
  )
}
