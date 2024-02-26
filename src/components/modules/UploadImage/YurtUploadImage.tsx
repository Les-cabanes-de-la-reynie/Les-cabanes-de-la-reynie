import { UploadImageCategoryKeyEnum } from '@/_types/uploadImage'
import { getUploadedImagesByCategory } from '@/services/queries/uploadedImagesByCategory'
import { unstable_noStore } from 'next/cache'
import UploadImage from '.'

const YurtUploadImage = async () => {
  unstable_noStore()
  const uploadedImages = await getUploadedImagesByCategory({
    category: UploadImageCategoryKeyEnum.YurtSlider
  })

  return (
    <div className='flex flex-col justify-between gap-8 md:flex-row'>
      <UploadImage
        category={UploadImageCategoryKeyEnum.YurtSlider}
        images={uploadedImages}
      />
    </div>
  )
}
export default YurtUploadImage
