import { useMemo } from 'react'
import Link from 'next/link'
import { cn } from '@/utils/cn'
import { NavigationIcon, PhoneIcon } from 'lucide-react'
import createTranslation from 'next-translate/createTranslation'
import {
  ESTABLISHMENT_TITLE,
  CITY,
  PHONE_NUMBER
} from '@/_constants/establishmentInformation'
import Heading from '@/components/elements/Heading'

const Address = ({ position }: { position: number[] }) => {
  const { t } = createTranslation('contact')

  const [lat, long] = position

  const ITINERARY_URL = useMemo(
    () =>
      `https://www.google.fr/maps/dir/${lat},+${long}/La+Reynie+Haute,+19310+Louignac/@44.1892761,1.0389325,8z`,
    [position]
  )

  return (
    <address className='text-center text-sm'>
      <Heading level={3} className={cn('mb-2 text-primary dark:text-primary')}>
        {ESTABLISHMENT_TITLE}
      </Heading>
      <Link
        href={ITINERARY_URL}
        target='_blank'
        rel='noreferrer'
        className='mb-2 flex flex-col hover:underline'
      >
        <span className='flex items-center justify-center'>
          <NavigationIcon size={15} className='mr-1' />
          {t('Itinerary')} :
        </span>
        <span>{CITY}</span>
      </Link>
      <Link href='tel:+33772348639' className='hover:underline'>
        <span className='flex items-center justify-center'>
          <PhoneIcon size={15} className='mr-1' /> {PHONE_NUMBER}
        </span>
      </Link>
    </address>
  )
}
export default Address
