'use client'

import { deleteUploadedImage } from '@/features/shared/uploadImage/infrastructure/actions/deleteUploadedImage'
import { useTranslations } from 'next-intl'
import { useTransition } from 'react'
import { toast } from 'sonner'
import { DeleteUploadImage, UploadImageEntity } from '../types'
import { PreviewImageItem } from './PreviewImageItem'

type PreviewImageListProps = { images: UploadImageEntity[] }

export const PreviewImageList = ({ images }: PreviewImageListProps) => {
  const t = useTranslations('Common')

  const [isPending, startTransition] = useTransition()

  const handleDeleteUploadedImage = async ({
    id,
    imageKey
  }: DeleteUploadImage) => {
    startTransition(async () => {
      // Update database
      const res = await deleteUploadedImage({
        id,
        imageKey
      })

      if (res?.validationErrors) {
        toast.error('There was an error deleting uploaded image.', {
          action: {
            label: t('close'),
            onClick: () => toast.dismiss()
          }
        })
        return
      }

      if (res?.serverError) {
        toast.error(res.serverError, {
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
