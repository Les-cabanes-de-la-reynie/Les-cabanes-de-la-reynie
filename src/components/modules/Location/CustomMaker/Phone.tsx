import { Address } from '@/_types/address'
import Link from 'next/link'

type PhoneProps = { address: Address }

const Phone = ({ address }: PhoneProps) => {
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
    <Link
      href={`tel:+${FRENCH_PHONE_CODE}${phoneNumberWithoutZero}`}
      className='hover:underline'
      data-testid='phone-number'
    >
      <span className='mb-2 flex items-center justify-center text-primary dark:text-primary'>
        <span itemProp='telephone'>{phoneNumberWithSpaces}</span>
      </span>
    </Link>
  )
}
export default Phone
