import Link from 'next/link'
import { cn } from '@/lib/utils'
import { PhoneIcon } from 'lucide-react'
import { ESTABLISHMENT_TITLE } from '@/_constants/establishmentInformation'
import { Address } from '@/_types/address'
import Heading from '@/components/elements/Heading'
import ItineraryAlertDialog from './ItineraryAlertDialog'

type AddressProps = { address: Address }

const Address = ({ address }: AddressProps) => {
  const FRENCH_PHONE_CODE = 33

  const phoneNumber = address.phone.trim()
  const phoneNumberWithoutZero = phoneNumber.slice(1, 10)

  const [
    number1,
    number2,
    number3,
    number4,
    number5,
    number6,
    number7,
    number8,
    number9,
    number10
  ] = phoneNumber.split('')
  const phoneNumberWithSpaces = `${number1}${number2} ${number3}${number4} ${number5}${number6} ${number7}${number8} ${number9}${number10}`

  return (
    <address className='text-center text-sm'>
      <Heading level={3} className={cn('mb-2 text-primary dark:text-primary')}>
        {ESTABLISHMENT_TITLE}
      </Heading>

      <ItineraryAlertDialog address={address} />

      <Link
        href={`tel:+${FRENCH_PHONE_CODE}${phoneNumberWithoutZero}`}
        className='hover:underline'
      >
        <span className='flex items-center justify-center text-primary dark:text-primary'>
          <PhoneIcon size={15} className='mr-1' />
          <span itemProp='telephone'>{phoneNumberWithSpaces}</span>
        </span>
      </Link>
    </address>
  )
}
export default Address
