import { UploadImageCategoryKeyEnum } from '@/_types/uploadImage'
import { getUploadedImagesByCategory } from '@/services/queries/uploadedImagesByCategory'
import { unstable_noStore } from 'next/cache'
import CarouselWithLightbox from '../Carousel/CarouselWithLightbox'

type AccommodationsSliderProps = {
  category: UploadImageCategoryKeyEnum
}

const AccommodationsSlider = async ({
  category
}: AccommodationsSliderProps) => {
  unstable_noStore()
  const images = await getUploadedImagesByCategory({ category })

  return images?.length ? (
    <section className='mx-auto w-full max-w-screen-2xl py-8 md:py-10'>
      <CarouselWithLightbox data={images} category={category} />
    </section>
  ) : null
}
export default AccommodationsSlider
