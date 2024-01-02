import Image from 'next/image'
import { X } from 'lucide-react'
import { UploadImage, UploadImageCategoryKeyEnum } from '@/_types/uploadImage'
import UploadImageDropzone from './UploadImageDropzone'
import { Button } from '@/components/ui/button'

type UploadImageCardProps = {
  endpoint: UploadImageCategoryKeyEnum
  images: UploadImage[]
}

const UploadImageCard = async ({ endpoint, images }: UploadImageCardProps) => {
  return (
    <div>
      <UploadImageDropzone endpoint={endpoint} />

      <ul className='mt-4 flex flex-wrap gap-4'>
        {images?.length > 0
          ? images?.map(({ id, imageUrl }) => (
              <li key={id} className='relative'>
                <Image
                  alt={`preview-${id}`}
                  src={imageUrl}
                  width={150}
                  height={150}
                  className='rounded-md'
                />
                <Button
                  size='icon'
                  variant='destructive'
                  className='absolute right-0 top-0 p-2'
                >
                  <X className='h-5 w-5' />
                </Button>
              </li>
            ))
          : 'Empty'}
      </ul>
    </div>
  )
}
export default UploadImageCard
