'use client'

import { UploadImageCategoryKeyEnum } from '@/features/shared/uploadImage/_types'
import { getUploadedImagesByCategoryOption } from '@/features/shared/uploadImage/infrastructure/getUploadedImagesByCategoryOption'
import { UploadedImages } from '@/features/shared/uploadImage/UploadedImages'
import { useQuery } from '@tanstack/react-query'

export const YurtUploadedImages = () => {
  const { data: uploadedImages = [] } = useQuery({
    ...getUploadedImagesByCategoryOption,
    meta: {
      category: UploadImageCategoryKeyEnum.YurtSlider
    }
  })

  return (
    <UploadedImages
      categoryKey={UploadImageCategoryKeyEnum.YurtSlider}
      images={uploadedImages}
    />
  )
}
