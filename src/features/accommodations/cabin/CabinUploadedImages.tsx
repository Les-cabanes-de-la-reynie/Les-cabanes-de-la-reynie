'use client'

import { UploadImageCategoryKeyEnum } from '@/features/shared/uploadImage/_types'
import { getCabinSliderImagesOptions } from '@/features/shared/uploadImage/infrastructure/getUploadedImagesByCategoryOption'
import { UploadedImages } from '@/features/shared/uploadImage/UploadedImages'
import { useQuery } from '@tanstack/react-query'

export const CabinUploadedImages = () => {
  const { data: uploadedImages = [] } = useQuery(getCabinSliderImagesOptions)

  return (
    <UploadedImages
      categoryKey={UploadImageCategoryKeyEnum.CabinSlider}
      images={uploadedImages}
    />
  )
}
