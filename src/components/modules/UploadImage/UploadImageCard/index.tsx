import { UploadImage, UploadImageCategoryKeyEnum } from '@/_types/uploadImage'
import UploadImageDropZone from './UploadImageDropZone'
import PreviewImageList from './PreviewImageList'

type UploadImageCardProps = {
  endpoint: UploadImageCategoryKeyEnum
  images: UploadImage[]
}

const UploadImageCard = async ({ endpoint, images }: UploadImageCardProps) => {
  return (
    <div>
      <UploadImageDropZone endpoint={endpoint} />

      <PreviewImageList images={images} />
    </div>
  )
}
export default UploadImageCard
