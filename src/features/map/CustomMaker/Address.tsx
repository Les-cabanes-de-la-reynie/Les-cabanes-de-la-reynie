import { Address as AddressType } from '@/features/address/_types'
import { Separator } from '@/shared/components/ui/separator'
import { Email } from './Email'
import { ItineraryAlertDialog } from './ItineraryAlertDialog'
import { Phone } from './Phone'

type AddressProps = { address: AddressType }

export const Address = ({ address }: AddressProps) => {
  return (
    <address className='text-sm'>
      <ItineraryAlertDialog address={address} />

      <Separator className='my-2' />

      <Phone address={address} />

      <Separator className='my-2' />

      <Email address={address} />
    </address>
  )
}
