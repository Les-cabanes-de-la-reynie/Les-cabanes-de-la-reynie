import { getAddress } from '@/services/queries/address'
import { PropsWithChildren } from 'react'
import FollowUsItem from './FollowUsItem'
import FooterItem from './FooterItem'

const FooterEmail = async ({ children }: PropsWithChildren) => {
  const { email } = await getAddress()

  return email ? (
    <FooterItem>
      <FollowUsItem href={`mailto:${email}`}>{children}</FollowUsItem>
    </FooterItem>
  ) : null
}
export default FooterEmail
