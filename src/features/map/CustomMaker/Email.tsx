import { APP_ICON_SIZE_CLASSNAME } from '@/_constants/className'
import { Address } from '@/_types/address'
import { IconContainer } from '@/components/IconContainer'
import { MailIcon } from 'lucide-react'
import { useTranslations } from 'next-intl'
import Link from 'next/link'

type EmailProps = { address: Address }

export const Email = ({ address }: EmailProps) => {
  const tCommon = useTranslations('Common')

  return (
    <Link
      href={`mailto:${address.email}`}
      className='hover:underline'
      data-testid='map-address-email'
    >
      <div itemProp='email' className='flex flex-col max-w-64 text-primary'>
        <div className='flex items-center'>
          <IconContainer>
            <MailIcon className={APP_ICON_SIZE_CLASSNAME} />
          </IconContainer>
          <span>{tCommon('email')}</span>
        </div>
        <span className='text-pretty'>{address.email}</span>
      </div>
    </Link>
  )
}
