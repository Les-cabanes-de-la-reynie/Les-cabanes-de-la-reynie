import { getCabinData } from '@/features/cabin/infrastructure/getCabinData'
import { getYurtData } from '@/features/yurt/infrastructure/getYurtData'
import { P } from '@/shared/components/P'
import { unstable_noStore } from 'next/cache'
import { AccommodationTypeEnum } from './types'

type AccommodationsPriceProps = {
  accommodationType: AccommodationTypeEnum
  description: string
}

export const AccommodationsPrice = async ({
  accommodationType,
  description
}: AccommodationsPriceProps) => {
  unstable_noStore()
  const accommodationPrice =
    accommodationType === AccommodationTypeEnum.CABIN
      ? (await getCabinData()).price
      : (await getYurtData()).price

  return (
    <P className='text-foreground'>
      {description} <span className='font-bold'>{accommodationPrice}€</span>
    </P>
  )
}
