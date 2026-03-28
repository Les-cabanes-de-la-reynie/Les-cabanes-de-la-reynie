import { UploadImageCategoryKeyEnum } from '@/features/shared/uploadImage/_types'
import { UploadedImages } from '@/features/shared/uploadImage/components/UploadedImages'
import { getUploadedImagesByCategory } from '@/features/shared/uploadImage/infrastructure/queries/getUploadedImagesByCategory'

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
