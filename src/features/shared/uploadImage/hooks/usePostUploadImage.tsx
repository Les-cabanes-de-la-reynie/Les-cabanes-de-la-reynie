import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useTranslations } from 'next-intl'
import { toast } from 'sonner'
import { getUploadedImagesQueryKey } from '../_const'
import { postUploadImage } from '../infrastructure/postUploadImage'

export const usePostUploadImage = () => {
  const tCommon = useTranslations('Common')
  const queryClient = useQueryClient()

  const { mutate: postUploadImageMutation, isPending } = useMutation({
    mutationFn: postUploadImage,
    onSuccess: (_, variables) => {
      // Only invalidate the cache for the relevant category
      queryClient.invalidateQueries({
        queryKey: getUploadedImagesQueryKey(variables.category)
      })

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
