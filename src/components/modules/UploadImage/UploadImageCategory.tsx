import Heading from '@/components/elements/Heading'
import UploadImageCard from './UploadImageCard'
import { UploadImage, UploadImageCategoryKeyEnum } from '@/_types/uploadImage'

type UploadImageCategoryProps = {
  title: string
  category: UploadImageCategoryKeyEnum
  images: UploadImage[]
}

const UploadImageCategory = ({
  title,
  category,
  images
}: UploadImageCategoryProps) => {
  return (
    <section className='w-full'>
      <Heading level={4} className='mt-2'>
        {title}
      </Heading>
      <UploadImageCard endpoint={category} images={images} />
    </section>
  )
}
export default UploadImageCategory
