import { Address } from '@/_types/address'
import Link from 'next/link'

type EmailProps = { address: Address }

const Email = ({ address }: EmailProps) => {
  return (
    <Link
      href={`mailto:${address.email}`}
      className='hover:underline'
      data-testid='map-address-email'
    >
      <span
        itemProp='email'
        className='m-auto flex max-w-64 items-center justify-center text-pretty text-primary dark:text-primary'
      >
        {address.email}
      </span>
    </Link>
  )
}
export default Email
