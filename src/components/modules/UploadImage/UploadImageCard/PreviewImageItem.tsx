import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { X } from 'lucide-react'
import { DeleteUploadImage, UploadImage } from '@/_types/uploadImage'

type PreviewImageItemProps = {
  image: UploadImage
  deleteUploadedImage: ({ id, imageKey }: DeleteUploadImage) => Promise<void>
}

const PreviewImageItem = ({
  image,
  deleteUploadedImage
}: PreviewImageItemProps) => {
  const { id, imageUrl, imageKey } = image

  const handleDeleteUploadedImage = () => deleteUploadedImage({ id, imageKey })

  return (
    <li className='relative'>
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
        onClick={handleDeleteUploadedImage}
      >
        <X className='h-5 w-5' />
      </Button>
    </li>
  )
}
export default PreviewImageItem
