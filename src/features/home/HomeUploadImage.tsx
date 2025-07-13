import { unstable_noStore } from 'next/cache'
import { getUploadedImagesByCategory } from '../shared/uploadImage/infrastructure/getUploadedImagesByCategory'
import { UploadImageCategoryKeyEnum } from '../shared/uploadImage/types'
import { UploadImage } from '../shared/uploadImage/UploadImage'

export const HomeUploadImage = async () => {
  unstable_noStore()
  const uploadedImages = await getUploadedImagesByCategory({
    category: UploadImageCategoryKeyEnum.HomeSlider
  })

  return (
    <UploadImage
      category={UploadImageCategoryKeyEnum.HomeSlider}
      images={uploadedImages}
    />
  )
}
