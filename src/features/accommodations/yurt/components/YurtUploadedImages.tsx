'use client'

import { UploadImageCategoryKeyEnum } from '@/features/shared/uploadImage/_types'
import { UploadedImages } from '@/features/shared/uploadImage/components/UploadedImages'
import { getUploadedImagesByCategory } from '@/features/shared/uploadImage/infrastructure/queries/getUploadedImagesByCategory'

export const YurtUploadedImages = async () => {
  const uploadedImages = await getUploadedImagesByCategory(
    UploadImageCategoryKeyEnum.YurtSlider
  )

  return (
    <UploadedImages
      categoryKey={UploadImageCategoryKeyEnum.YurtSlider}
      images={uploadedImages}
    />
  )
}
