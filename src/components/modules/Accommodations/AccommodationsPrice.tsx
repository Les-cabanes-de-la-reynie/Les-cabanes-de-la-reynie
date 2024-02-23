import { AccommodationTypeEnum } from '@/_types/accommodations'
import P from '@/components/elements/P'
import { getHutData } from '@/services/queries/hut'
import { getYurtData } from '@/services/queries/yurt'

type AccommodationsPriceProps = {
  accommodationType: AccommodationTypeEnum
  description: string
}

const AccommodationsPrice = async ({
  accommodationType,
  description
}: AccommodationsPriceProps) => {
  const accommodationPrice =
    accommodationType === AccommodationTypeEnum.HUT
      ? (await getHutData()).price
      : (await getYurtData()).price

  return (
    <P>
      {description} {accommodationPrice}€
    </P>
  )
}
export default AccommodationsPrice
