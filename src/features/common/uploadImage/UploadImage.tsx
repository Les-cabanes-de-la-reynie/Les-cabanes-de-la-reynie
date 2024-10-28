
import { UploadImageEntity, UploadImageCategoryKeyEnum } from './types'
import { UploadImageCard } from './UploadImageCard/UploadImageCard'

type UploadImageProps = {
  category: UploadImageCategoryKeyEnum
  images: UploadImageEntity[]
}

export const UploadImage = ({ category, images }: UploadImageProps) => {
  return (
    <div className='flex flex-col justify-between gap-8 md:flex-row'>
      <div className='w-full'>
        <UploadImageCard endpoint={category} images={images} />
      </div>
    </div>
  )
}
