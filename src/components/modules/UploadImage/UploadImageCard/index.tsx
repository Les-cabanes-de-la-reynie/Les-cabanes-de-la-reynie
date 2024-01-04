import { UploadImage, UploadImageCategoryKeyEnum } from '@/_types/uploadImage'
import UploadImageDropzone from './UploadImageDropzone'
import PreviewImageList from './PreviewImageList'
import Heading from '@/components/elements/Heading'

type UploadImageCardProps = {
  endpoint: UploadImageCategoryKeyEnum
  images: UploadImage[]
}

const UploadImageCard = async ({ endpoint, images }: UploadImageCardProps) => {
  return (
    <div>
      <UploadImageDropzone endpoint={endpoint} />

      <Heading level={4} className='mt-2 text-center'>
        Preview
      </Heading>
      <PreviewImageList images={images} />
    </div>
  )
}
export default UploadImageCard
