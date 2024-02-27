import { ESTABLISHMENT_TITLE } from '@/_constants/establishmentInformation'
import { Address } from '@/_types/address'
import Heading from '@/components/elements/Heading'
import { cn } from '@/utils/tailwind'
import Email from './Email'
import ItineraryAlertDialog from './ItineraryAlertDialog'
import Phone from './Phone'

type AddressProps = { address: Address }

const Address = ({ address }: AddressProps) => {
  return (
    <address className='text-center text-sm'>
      <Heading level={3} className={cn('mb-2 text-primary dark:text-primary')}>
        {ESTABLISHMENT_TITLE}
      </Heading>

      <ItineraryAlertDialog address={address} />

      <Phone address={address} />

      <Email address={address} />
    </address>
  )
}
export default Address
