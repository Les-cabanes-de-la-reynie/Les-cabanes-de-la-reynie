'use client'

import { UploadedImage } from '../_types'
import { PreviewImageItem } from './PreviewImageItem'

type PreviewImageListProps = { images: UploadedImage[] }

export const PreviewImageList = ({ images }: PreviewImageListProps) => {
  return (
    <ul className='mt-4 flex flex-wrap gap-4'>
      {images?.length > 0
        ? images.map(image => <PreviewImageItem key={image.id} image={image} />)
        : 'Empty'}
    </ul>
  )
}
