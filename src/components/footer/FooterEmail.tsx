import { getAddress } from '@/features/address/infrastructure/getAddress'
import { unstable_noStore } from 'next/cache'
import { PropsWithChildren } from 'react'
import { FollowUsItem } from './FollowUsItem'

type FooterEmailProps = PropsWithChildren & {
  ariaLabel: string
}

export const FooterEmail = async ({
  children,
  ariaLabel
}: FooterEmailProps) => {
  unstable_noStore()
  const { email } = await getAddress()

  return email ? (
    <FollowUsItem href={`mailto:${email}`} aria-label={ariaLabel}>
      {children}
    </FollowUsItem>
  ) : null
}
