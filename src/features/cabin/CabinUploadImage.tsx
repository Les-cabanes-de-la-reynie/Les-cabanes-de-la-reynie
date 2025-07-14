import { getUploadedImagesByCategory } from '@/features/shared/uploadImage/infrastructure/getUploadedImagesByCategory'
import { UploadImage } from '@/features/shared/uploadImage/UploadImage'
import { UploadImageCategoryKeyEnum } from '../shared/uploadImage/types'

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
