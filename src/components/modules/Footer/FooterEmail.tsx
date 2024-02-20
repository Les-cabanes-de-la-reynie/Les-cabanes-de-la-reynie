import { getAddress } from '@/services/queries/address'
import { PropsWithChildren } from 'react'
import FollowUsItem from './FollowUsItem'

type FooterEmailProps = PropsWithChildren & {
  ariaLabel: string
}

const FooterEmail = async ({ children, ariaLabel }: FooterEmailProps) => {
  const { email } = await getAddress()

  return email ? (
    <FollowUsItem href={`mailto:${email}`} aria-label={ariaLabel}>
      {children}
    </FollowUsItem>
  ) : null
}
export default FooterEmail
