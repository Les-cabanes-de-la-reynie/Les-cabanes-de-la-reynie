import {
  UploadImageCategoryKeyEnum,
  UploadImage as UploadImageType
} from '@/_types/uploadImage'
import UploadImageCard from './UploadImageCard'

type UploadImageProps = {
  category: UploadImageCategoryKeyEnum
  images: UploadImageType[]
}

const UploadImage = ({ category, images }: UploadImageProps) => {
  return (
    <div className='w-full'>
      <UploadImageCard endpoint={category} images={images} />
    </div>
  )
}
export default UploadImage
