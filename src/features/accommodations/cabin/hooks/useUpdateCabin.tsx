import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useTranslations } from 'next-intl'
import { toast } from 'sonner'
import { CABIN_QUERY_KEY } from '../_const'
import { updateCabin } from '../infrastructure/updateCabin'

export const useUpdateCabin = () => {
  const tCommon = useTranslations('Common')

  const queryClient = useQueryClient()

  const { mutate: updateCabinMutation, isPending } = useMutation({
    mutationFn: updateCabin,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [CABIN_QUERY_KEY] })

      toast.success("Success ! Cabin's price updated", {
        action: {
          label: tCommon('close'),
          onClick: () => toast.dismiss()
        }
      })
    },
    onError: () => {
      toast.error('There was an error updating cabin.', {
        action: {
          label: tCommon('close'),
          onClick: () => toast.dismiss()
        }
      })
    }
  })

  return { updateCabinMutation, isPending }
}
