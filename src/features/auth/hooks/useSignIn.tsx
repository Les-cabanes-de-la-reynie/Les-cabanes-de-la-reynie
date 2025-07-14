import { PAGE_ROUTES } from '@/shared/_constants/page'
import { authClient } from '@/shared/lib/auth-client'
import { useMutation } from '@tanstack/react-query'
import { useTranslations } from 'next-intl'
import { useRouter } from 'next/navigation'
import { toast } from 'sonner'
import { signIn } from '../infrastructure/signIn'

export const useSignIn = () => {
  const tCommon = useTranslations('Common')
  const router = useRouter()
  const session = authClient.useSession()

  const { mutate: signInMutation, isPending } = useMutation({
    mutationFn: signIn,
    onSuccess: () => {
      // Force session update
      // Useful to update Profile component after a sign in
      session.refetch()

      router.push(PAGE_ROUTES.admin.home)

      toast.success('Success ! You are now connected', {
        action: {
          label: tCommon('close'),
          onClick: () => toast.dismiss()
        }
      })
    },
    onError: () => {
      toast.error('There was an error during sign in.', {
        action: {
          label: tCommon('close'),
          onClick: () => toast.dismiss()
        }
      })
    }
  })

  return { signInMutation, isPending }
}
