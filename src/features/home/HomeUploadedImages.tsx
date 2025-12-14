'use client'

import { UploadImageCategoryKeyEnum } from '../shared/uploadImage/_types'
import { UploadedImages } from '../shared/uploadImage/components/UploadedImages'
import { getUploadedImagesByCategory } from '../shared/uploadImage/infrastructure/queries/getUploadedImagesByCategory'

export const HomeUploadedImages = async () => {
  const uploadedImages = await getUploadedImagesByCategory(
    UploadImageCategoryKeyEnum.HomeSlider
  )

  return (
    <UploadedImages
      categoryKey={UploadImageCategoryKeyEnum.HomeSlider}
      images={uploadedImages}
    />
  )
}
