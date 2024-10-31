import { getUploadedImagesByCategory } from '@/features/common/uploadImage/infrastructure/getUploadedImagesByCategory'
import { UploadImage } from '@/features/common/uploadImage/UploadImage'
import { unstable_noStore } from 'next/cache'
import { UploadImageCategoryKeyEnum } from '../common/uploadImage/types'

export const HutUploadImage = async () => {
  unstable_noStore()
  const uploadedImages = await getUploadedImagesByCategory({
    category: UploadImageCategoryKeyEnum.HutSlider
  })

  return (
    <UploadImage
      category={UploadImageCategoryKeyEnum.HutSlider}
      images={uploadedImages}
    />
  )
}
