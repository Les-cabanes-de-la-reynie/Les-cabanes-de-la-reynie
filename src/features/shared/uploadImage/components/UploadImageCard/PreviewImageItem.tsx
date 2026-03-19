import { APP_ICON_SIZE_CLASSNAME } from '@/shared/_constants/className'
import { Loader } from '@/shared/components/Loader'
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger
} from '@/shared/components/ui/alert-dialog'
import { Button } from '@/shared/components/ui/button'
import { Skeleton } from '@/shared/components/ui/skeleton'
import { X } from 'lucide-react'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import { useTransition } from 'react'
import { toast } from 'sonner'
import { DeleteUploadImage, UploadedImage } from '../../_types'
import { deleteUploadedImage } from '../../infrastructure/actions/deleteUploadedImage'

type PreviewImageItemProps = {
  image: UploadedImage
}

export const PreviewImageItem = ({ image }: PreviewImageItemProps) => {
  const { id, imageUrl, imageKey } = image

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

  if (isPending)
    return (
      <Skeleton className='relative flex h-28 w-36 items-center justify-center'>
        <Loader />
      </Skeleton>
    )

  return (
    <li className='relative h-28 w-36 select-none overflow-hidden bg-popover'>
      <Image
        alt={`preview-${id}`}
        src={imageUrl}
        fill
        sizes='33vw'
        className='rounded-md object-cover'
        quality={50}
      />
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <Button
            size='icon'
            variant='destructive'
            className='absolute right-0 top-0 p-2'
          >
            <X className={APP_ICON_SIZE_CLASSNAME} />
          </Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>
              Êtes-vous sûrs de vouloir supprimer cette image ?
            </AlertDialogTitle>
            <AlertDialogDescription>
              Cette action ne peut être annulée. Cette action supprimera
              définitivement votre image.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Annuler</AlertDialogCancel>
            <Button
              variant={'destructive'}
              onClick={() => handleDeleteUploadedImage({ id, imageKey })}
            >
              Supprimer
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </li>
  )
}
