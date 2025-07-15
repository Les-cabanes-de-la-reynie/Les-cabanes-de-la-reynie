import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useTranslations } from 'next-intl'
import { toast } from 'sonner'
import { YURT_QUERY_KEY } from '../_const'
import { updateYurt } from '../infrastructure/updateYurt'

export const useUpdateYurt = () => {
  const tCommon = useTranslations('Common')

  const queryClient = useQueryClient()

  const { mutate: updateYurtMutation, isPending } = useMutation({
    mutationFn: updateYurt,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [YURT_QUERY_KEY] })

      toast.success("Success ! Yurt's price updated", {
        action: {
          label: tCommon('close'),
          onClick: () => toast.dismiss()
        }
      })
    },
    onError: () => {
      toast.error('There was an error updating yurt.', {
        action: {
          label: tCommon('close'),
          onClick: () => toast.dismiss()
        }
      })
    }
  })

  return { updateYurtMutation, isPending }
}
