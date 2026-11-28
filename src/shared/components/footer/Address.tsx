import { getAddress } from '@/features/address/infrastructure/queries/getAddress'
import { ESTABLISHMENT_TITLE } from '@/shared/_constants/establishmentInformation'
import { formatPhoneNumber } from '@/shared/utils/formats'
import { MailIcon, MapPinIcon, PhoneIcon } from 'lucide-react'

const ROW_CLASSNAME = 'flex gap-3'
const ICON_CLASSNAME = 'mt-1 size-4 shrink-0 text-white/60'
const LINK_CLASSNAME =
  'rounded-xs underline decoration-white/40 underline-offset-4 transition-colors wrap-anywhere hover:text-white hover:decoration-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white'

export const Address = async () => {
  const address = await getAddress()

  return (
    // pt-1 lines the first row up with the 32px link rows beside it
    <address
      className='flex flex-col gap-3 pt-1 text-[15px] not-italic text-white/80'
      itemScope
      itemType='https://schema.org/LodgingBusiness'
    >
      <div className={ROW_CLASSNAME}>
        <MapPinIcon aria-hidden className={ICON_CLASSNAME} />
        <div>
          <div itemProp='name' className='font-semibold text-white'>
            {ESTABLISHMENT_TITLE}
          </div>
          <div
            itemProp='address'
            itemScope
            itemType='https://schema.org/PostalAddress'
          >
            {address.streetAddress && (
              <div itemProp='streetAddress'>{address.streetAddress}</div>
            )}
            <div>
              <span itemProp='postalCode'>{address.postalCode}</span>{' '}
              <span itemProp='addressLocality'>{address.city}</span>,{' '}
              <span itemProp='addressCountry'>{address.country}</span>
            </div>
          </div>
        </div>
      </div>

      <div className={ROW_CLASSNAME}>
        <PhoneIcon aria-hidden className={ICON_CLASSNAME} />
        <div itemProp='telephone'>
          <a href={`tel:${address.phone}`} className={LINK_CLASSNAME}>
            {formatPhoneNumber(address.phone)}
          </a>
        </div>
      </div>

      <div className={ROW_CLASSNAME}>
        <MailIcon aria-hidden className={ICON_CLASSNAME} />
        <div itemProp='email' className='min-w-0'>
          <a href={`mailto:${address.email}`} className={LINK_CLASSNAME}>
            {address.email}
          </a>
        </div>
      </div>
    </address>
  )
}
