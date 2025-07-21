'use client'

import { useQuery } from '@tanstack/react-query'
import { UploadImageCategoryKeyEnum } from '../shared/uploadImage/_types'
import { getUploadedImagesByCategoryOption } from '../shared/uploadImage/infrastructure/getUploadedImagesByCategoryOption'
import { UploadedImages } from '../shared/uploadImage/UploadedImages'

export const HomeUploadedImages = () => {
  const { data: uploadedImages = [] } = useQuery({
    ...getUploadedImagesByCategoryOption,
    meta: {
      category: UploadImageCategoryKeyEnum.HomeSlider
    }
  })

  return (
    <UploadedImages
      categoryKey={UploadImageCategoryKeyEnum.HomeSlider}
      images={uploadedImages}
    />
  )
}
