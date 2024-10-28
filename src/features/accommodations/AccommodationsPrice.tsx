import { P } from '@/components/P'
import { getHutData } from '@/services/queries/hut'
import { getYurtData } from '@/services/queries/yurt'
import { unstable_noStore } from 'next/cache'
import { AccommodationTypeEnum } from './hh'

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
