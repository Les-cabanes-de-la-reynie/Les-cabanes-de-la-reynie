import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useTranslations } from 'next-intl'
import { toast } from 'sonner'
import { UPLOADED_IMAGES_QUERY_KEY } from '../_const'
import { DeleteUploadImage } from '../_types'
import { deleteUploadedImage } from '../infrastructure/deleteUploadedImage'

export const useDeleteUploadedImage = () => {
  const tCommon = useTranslations('Common')

  const queryClient = useQueryClient()

  const { mutate: deleteUploadedImageMutation, isPending } = useMutation({
    mutationFn: ({ id, imageKey }: DeleteUploadImage) =>
      deleteUploadedImage(id, imageKey),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [UPLOADED_IMAGES_QUERY_KEY] })

      toast.success('Success ! Uploaded image deleted', {
        action: {
          label: tCommon('close'),
          onClick: () => toast.dismiss()
        }
      })
    },
    onError: () => {
      toast.error('There was an error deleting uploaded image.', {
        action: {
          label: tCommon('close'),
          onClick: () => toast.dismiss()
        }
      })
    }
  })

  return { deleteUploadedImageMutation, isPending }
}
