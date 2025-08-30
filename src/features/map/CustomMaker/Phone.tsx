import { Address } from '@/features/address/_types'
import { APP_ICON_SIZE_CLASSNAME } from '@/shared/_constants/className'
import { IconContainer } from '@/shared/components/IconContainer'
import { PhoneIcon } from 'lucide-react'
import { useTranslations } from 'next-intl'
import Link from 'next/link'
import { FRENCH_PHONE_CODE } from '../_const'

type PhoneProps = { address: Address }

export const Phone = ({ address }: PhoneProps) => {
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
          <IconContainer>
            <PhoneIcon className={APP_ICON_SIZE_CLASSNAME} />
          </IconContainer>
          {tCommon('phone')} :
        </div>
        <span itemProp='telephone'>{phoneNumberWithSpaces}</span>
      </span>
    </Link>
  )
}
