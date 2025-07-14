import { getAddress } from '@/features/address/infrastructure/getAddress'
import { PropsWithChildren } from 'react'
import { FollowUsItem } from './FollowUsItem'

type FooterEmailProps = PropsWithChildren & {
  ariaLabel: string
}

export const FooterEmail = async ({
  children,
  ariaLabel
}: FooterEmailProps) => {
  const { email } = await getAddress()

  return email ? (
    <FollowUsItem href={`mailto:${email}`} aria-label={ariaLabel}>
      {children}
    </FollowUsItem>
  ) : null
}
