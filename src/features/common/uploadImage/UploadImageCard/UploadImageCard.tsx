import { Heading } from '@/components/Heading'
import { UploadImageCategoryKeyEnum, UploadImageEntity } from '../types'
import { PreviewImageList } from './PreviewImageList'
import { UploadImageDropzone } from './UploadImageDropzone'

type UploadImageCardProps = {
  endpoint: UploadImageCategoryKeyEnum
  images: UploadImageEntity[]
}

export const UploadImageCard = async ({
  endpoint,
  images
}: UploadImageCardProps) => {
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
