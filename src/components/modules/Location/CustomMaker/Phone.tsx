import { APP_ICON_SIZE_CLASSNAME } from '@/_constants/className'
import { Address } from '@/_types/address'
import { IconContainer } from '@/components/elements/IconContainer'
import { PhoneIcon } from 'lucide-react'
import { useTranslations } from 'next-intl'
import Link from 'next/link'
import { FRENCH_PHONE_CODE } from '../const'

type PhoneProps = { address: Address }

const Phone = ({ address }: PhoneProps) => {
  const tCommon = useTranslations('Common')

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
      className='hover:underline flex'
      data-testid='phone-number'
    >
      <span className='flex flex-col text-primary'>
        <div className='flex items-center'>
          <IconContainer size={'none'}>
            <PhoneIcon className={APP_ICON_SIZE_CLASSNAME} />
          </IconContainer>
          {tCommon('phone')} :
        </div>
        <span itemProp='telephone'>{phoneNumberWithSpaces}</span>
      </span>
    </Link>
  )
}
export default Phone
