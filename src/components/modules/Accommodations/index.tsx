import CarouselWithLightbox from '../Carousel/CarouselWithLightbox'
import { UploadImageCategoryKeyEnum } from '@/_types/uploadImage'
import { getUploadedImagesByCategory } from '@/services/queries/uploadedImagesByCategory'

type AccommodationsProps = {
  category: UploadImageCategoryKeyEnum
}

const Accommodations = async ({ category }: AccommodationsProps) => {
  const images = await getUploadedImagesByCategory({ category })

  return images?.length ? (
    <section className='mx-auto w-full max-w-screen-2xl py-14'>
      <CarouselWithLightbox data={images} />
    </section>
  ) : null
}
export default Accommodations
