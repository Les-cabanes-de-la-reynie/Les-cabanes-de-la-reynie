import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useTranslations } from 'next-intl'
import { toast } from 'sonner'
import { OPENING_HOURS_QUERY_KEY } from '../_const'
import { updateOpeningHours } from '../infrastructure/updateOpeningHours'

export const useUpdateOpeningHours = () => {
  const tCommon = useTranslations('Common')

  const queryClient = useQueryClient()

  const { mutate: updateOpeningHoursMutation, isPending } = useMutation({
    mutationFn: updateOpeningHours,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [OPENING_HOURS_QUERY_KEY] })

      toast.success('Success ! Opening hours information updated', {
        action: {
          label: tCommon('close'),
          onClick: () => toast.dismiss()
        }
      })
    },
    onError: () => {
      toast.error('There was an error updating opening hours.', {
        action: {
          label: tCommon('close'),
          onClick: () => toast.dismiss()
        }
      })
    }
  })

  return { updateOpeningHoursMutation, isPending }
}
