import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useTranslations } from 'next-intl'
import { toast } from 'sonner'
import { ADDRESS_QUERY_KEY } from '../_const'
import { updateAddress } from '../infrastructure/updateAddress'

export const useUpdateAddress = () => {
  const tCommon = useTranslations('Common')

  const queryClient = useQueryClient()

  const { mutate: updateAddressMutation, isPending } = useMutation({
    mutationFn: updateAddress,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [ADDRESS_QUERY_KEY] })

      toast.success('Success ! Address information updated', {
        action: {
          label: tCommon('close'),
          onClick: () => toast.dismiss()
        }
      })
    },
    onError: () => {
      toast.error('There was an error updating address.', {
        action: {
          label: tCommon('close'),
          onClick: () => toast.dismiss()
        }
      })
    }
  })

  return { updateAddressMutation, isPending }
}
