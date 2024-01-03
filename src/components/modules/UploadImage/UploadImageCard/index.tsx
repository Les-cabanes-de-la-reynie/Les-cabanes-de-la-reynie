import { UploadImage, UploadImageCategoryKeyEnum } from '@/_types/uploadImage'
import UploadImageDropzone from './UploadImageDropzone'
import PreviewImageList from './PreviewImageList'

type UploadImageCardProps = {
  endpoint: UploadImageCategoryKeyEnum
  images: UploadImage[]
}

const UploadImageCard = async ({ endpoint, images }: UploadImageCardProps) => {
  return (
    <div>
      <UploadImageDropzone endpoint={endpoint} />

      <PreviewImageList images={images} />
    </div>
  )
}
export default UploadImageCard
