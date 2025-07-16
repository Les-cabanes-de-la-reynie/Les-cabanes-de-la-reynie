import { getAddressOptions } from '@/features/address/infrastructure/getAddressOptions'
import { Separator } from '@/shared/components/ui/separator'
import { useSuspenseQuery } from '@tanstack/react-query'
import { Email } from './Email'
import { ItineraryAlertDialog } from './ItineraryAlertDialog'
import { Phone } from './Phone'

export const Address = () => {
  const { data: address } = useSuspenseQuery(getAddressOptions)

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
