import { getUploadedImagesByCategory } from '@/features/shared/uploadImage/infrastructure/getUploadedImagesByCategory'
import { UploadImageCategoryKeyEnum } from '@/features/shared/uploadImage/types'
import { UploadImage } from '@/features/shared/uploadImage/UploadImage'

export const YurtUploadImage = async () => {
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
