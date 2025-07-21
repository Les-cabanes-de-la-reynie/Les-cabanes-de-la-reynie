import { CarouselWithLightbox } from '@/features/carousel/CarouselWithLightbox'
import { UploadedImage } from '@/features/shared/uploadImage/_types'

type AccommodationsSliderProps = {
  title?: string
  uploadedImages: UploadedImage[]
}

export const AccommodationsSlider = ({
  title,
  uploadedImages
}: AccommodationsSliderProps) => {
  return uploadedImages?.length ? (
    <CarouselWithLightbox data={uploadedImages} title={title} />
  ) : null
}
