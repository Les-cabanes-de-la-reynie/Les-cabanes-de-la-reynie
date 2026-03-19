import { UploadImageCategoryKeyEnum } from '@/features/shared/uploadImage/_types'
import { getUploadedImagesByCategory } from '@/features/shared/uploadImage/infrastructure/queries/getUploadedImagesByCategory'
import { getTranslations } from 'next-intl/server'
import { AccommodationsSlider } from '../../components/AccommodationsSlider'

export const YurtAccommodationSlider = async () => {
  const tYurt = await getTranslations('Yurt')

  const uploadedImages = await getUploadedImagesByCategory(
    UploadImageCategoryKeyEnum.YurtSlider
  )

  return (
    <AccommodationsSlider
      title={tYurt('sliderTitle')}
      uploadedImages={uploadedImages}
      isLoading={false}
    />
  )
}
