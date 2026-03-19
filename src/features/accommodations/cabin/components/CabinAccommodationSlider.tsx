import { UploadImageCategoryKeyEnum } from '@/features/shared/uploadImage/_types'
import { getUploadedImagesByCategory } from '@/features/shared/uploadImage/infrastructure/queries/getUploadedImagesByCategory'
import { getTranslations } from 'next-intl/server'
import { AccommodationsSlider } from '../../components/AccommodationsSlider'

export const CabinAccommodationSlider = async () => {
  const tCabin = await getTranslations('Cabin')

  const uploadedImages = await getUploadedImagesByCategory(
    UploadImageCategoryKeyEnum.CabinSlider
  )

  return (
    <AccommodationsSlider
      title={tCabin('sliderTitle')}
      uploadedImages={uploadedImages}
      isLoading={false}
    />
  )
}
