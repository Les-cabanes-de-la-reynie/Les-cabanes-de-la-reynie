import { UploadImage } from '@/features/common/uploadImage/UploadImage'
import { getUploadedImagesByCategory } from '@/services/queries/uploadedImagesByCategory'
import { unstable_noStore } from 'next/cache'
import { UploadImageCategoryKeyEnum } from '../common/uploadImage/types'

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
