import { getUploadedImagesByCategory } from '@/features/shared/uploadImage/infrastructure/getUploadedImagesByCategory'
import { UploadImageCategoryKeyEnum } from '@/features/shared/uploadImage/types'
import { UploadImage } from '@/features/shared/uploadImage/UploadImage'

export const CabinUploadImage = async () => {
  const uploadedImages = await getUploadedImagesByCategory({
    category: UploadImageCategoryKeyEnum.CabinSlider
  })

  return (
    <UploadImage
      category={UploadImageCategoryKeyEnum.CabinSlider}
      images={uploadedImages}
    />
  )
}
