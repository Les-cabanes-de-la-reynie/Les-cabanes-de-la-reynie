import { P } from '@/components/P'
import { getHutData } from '@/features/hut/infrastructure/getHutData'
import { getYurtData } from '@/features/yurt/infrastructure/getYurtData'
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
    accommodationType === AccommodationTypeEnum.HUT
      ? (await getHutData()).price
      : (await getYurtData()).price

  return (
    <P className='text-foreground'>
      {description} <span className='font-bold'>{accommodationPrice}€</span>
    </P>
  )
}
