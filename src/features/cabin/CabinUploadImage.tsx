import { getUploadedImagesByCategory } from '@/features/common/uploadImage/infrastructure/getUploadedImagesByCategory'
import { UploadImage } from '@/features/common/uploadImage/UploadImage'
import { unstable_noStore } from 'next/cache'
import { UploadImageCategoryKeyEnum } from '../common/uploadImage/types'

export const CabinUploadImage = async () => {
  unstable_noStore()
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
