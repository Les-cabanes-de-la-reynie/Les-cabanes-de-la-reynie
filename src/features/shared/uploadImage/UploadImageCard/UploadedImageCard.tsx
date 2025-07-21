import { Heading } from '@/shared/components/Heading'
import { UploadedImage, UploadImageCategoryKeyEnum } from '../_types'
import { PreviewImageList } from './PreviewImageList'
import { UploadImageDropzone } from './UploadImageDropzone'

type UploadedImageCardProps = {
  categoryKey: UploadImageCategoryKeyEnum
  images: UploadedImage[]
}

export const UploadedImageCard = ({
  categoryKey,
  images
}: UploadedImageCardProps) => {
  return (
    <div>
      <UploadImageDropzone categoryKey={categoryKey} />

      <Heading level={4} className='mt-2 text-center'>
        Preview
      </Heading>
      <PreviewImageList images={images} />
    </div>
  )
}
