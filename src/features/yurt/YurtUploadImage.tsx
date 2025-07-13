import { getUploadedImagesByCategory } from '@/features/shared/uploadImage/infrastructure/getUploadedImagesByCategory'
import { UploadImage } from '@/features/shared/uploadImage/UploadImage'
import { unstable_noStore } from 'next/cache'
import { UploadImageCategoryKeyEnum } from '../shared/uploadImage/types'

export const YurtUploadImage = async () => {
  unstable_noStore()

  const uploadedImages = await getUploadedImagesByCategory({
    category: UploadImageCategoryKeyEnum.YurtSlider
  })

  return (
    <UploadImage
      category={UploadImageCategoryKeyEnum.YurtSlider}
      images={uploadedImages}
    />
  )
}
