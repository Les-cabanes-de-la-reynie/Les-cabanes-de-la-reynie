import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useTranslations } from 'next-intl'
import { toast } from 'sonner'
import { UPLOADED_IMAGES_QUERY_KEY } from '../_const'
import { postUploadImage } from '../infrastructure/postUploadImage'

export const usePostUploadImage = () => {
  const tCommon = useTranslations('Common')

  const queryClient = useQueryClient()

  const { mutate: postUploadImageMutation, isPending } = useMutation({
    mutationFn: postUploadImage,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [UPLOADED_IMAGES_QUERY_KEY] })

      toast.success('Success ! Uploaded image updated', {
        action: {
          label: tCommon('close'),
          onClick: () => toast.dismiss()
        }
      })
    },
    onError: () => {
      toast.error('There was an error updating uploaded image.', {
        action: {
          label: tCommon('close'),
          onClick: () => toast.dismiss()
        }
      })
    }
  })

  return { postUploadImageMutation, isPending }
}
