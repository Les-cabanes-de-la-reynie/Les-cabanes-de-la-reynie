'use client'

import { useTranslations } from 'next-intl'
import { DeleteUploadImage, UploadImage } from '@/_types/uploadImage'
import PreviewImageItem from './PreviewImageItem'
import { useOptimistic, useTransition } from 'react'
import { deleteUploadedImage } from '@/services/actions/deleteUploadedImage'
import { toast } from 'sonner'

type PreviewImageListProps = { images: UploadImage[] }

const PreviewImageList = ({ images }: PreviewImageListProps) => {
  const t = useTranslations('Common')

  const [isPending, startTransition] = useTransition()
  const [optiUploadedImages, removeOptiUploadedImage] = useOptimistic(
    images || [],
    (state: UploadImage[], deleteId: string) =>
      [...state].filter(uploadedImage => uploadedImage?.id !== deleteId)
  )

  const handleDeleteUploadedImage = async ({
    id,
    imageKey
  }: DeleteUploadImage) => {
    startTransition(async () => {
      // Fast update UI
      removeOptiUploadedImage(id)

      // Update database
      const { validationError, serverError } = await deleteUploadedImage({
        id,
        imageKey
      })

      if (validationError) {
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
      {optiUploadedImages?.length > 0
        ? optiUploadedImages.map(image => (
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
