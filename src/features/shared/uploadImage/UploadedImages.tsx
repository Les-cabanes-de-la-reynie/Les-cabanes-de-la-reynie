import {
  UploadedImage as UploadedImageType,
  UploadImageCategoryKeyEnum
} from './_types'
import { UploadedImageCard } from './UploadImageCard/UploadedImageCard'

type UploadedImagesProps = {
  categoryKey: UploadImageCategoryKeyEnum
  images: UploadedImageType[]
}

export const UploadedImages = ({
  categoryKey,
  images
}: UploadedImagesProps) => {
  return (
    <div className='flex flex-col justify-between gap-8 md:flex-row'>
      <div className='w-full'>
        <UploadedImageCard categoryKey={categoryKey} images={images} />
      </div>
    </div>
  )
}
