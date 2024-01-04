import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { X } from 'lucide-react'
import { DeleteUploadImage, UploadImage } from '@/_types/uploadImage'
import Loader from '@/components/elements/Loader'
import { Skeleton } from '@/components/ui/skeleton'

type PreviewImageItemProps = {
  image: UploadImage
  deleteUploadedImage: ({ id, imageKey }: DeleteUploadImage) => Promise<void>
  isLoading: boolean
}

const PreviewImageItem = ({
  image,
  deleteUploadedImage,
  isLoading
}: PreviewImageItemProps) => {
  const { id, imageUrl, imageKey } = image

  const handleDeleteUploadedImage = () => deleteUploadedImage({ id, imageKey })

  if (isLoading)
    return (
      <Skeleton className='relative flex h-28 w-36 items-center justify-center'>
        <Loader />
      </Skeleton>
    )

  return (
    <li className='relative h-28 w-36 select-none bg-popover'>
      <Image
        alt={`preview-${id}`}
        src={imageUrl}
        fill
        className='rounded-md object-cover'
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
