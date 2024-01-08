'use client'

import { useTransition } from 'react'
import { useTranslations } from 'next-intl'
import { DeleteUploadImage, UploadImage } from '@/_types/uploadImage'
import PreviewImageItem from './PreviewImageItem'
import { deleteUploadedImage } from '@/services/actions/deleteUploadedImage'
import { toast } from 'sonner'

type PreviewImageListProps = { images: UploadImage[] }

const PreviewImageList = ({ images }: PreviewImageListProps) => {
  const t = useTranslations('Common')

  const [isPending, startTransition] = useTransition()

  const handleDeleteUploadedImage = async ({
    id,
    imageKey
  }: DeleteUploadImage) => {
    startTransition(async () => {
      // Update database
      const { validationErrors, serverError } = await deleteUploadedImage({
        id,
        imageKey
      })

      if (validationErrors) {
        toast.error('There was an error deleting uploaded image.', {
          action: {
            label: t('close'),
            onClick: () => toast.dismiss()
          }
        })
        return
      }

      if (serverError) {
        toast.error(serverError, {
          action: {
            label: t('close'),
            onClick: () => toast.dismiss()
          }
        })
        return
      }

      toast.success('Success ! Uploaded image is deleted', {
        action: {
          label: t('close'),
          onClick: () => toast.dismiss()
        }
      })
    })
  }

  return (
    <ul className='mt-4 flex flex-wrap gap-4'>
      {images?.length > 0
        ? images.map(image => (
            <PreviewImageItem
              key={image.id}
              image={image}
              deleteUploadedImage={handleDeleteUploadedImage}
              isLoading={isPending}
            />
          ))
        : 'Empty'}
    </ul>
  )
}
export default PreviewImageList
