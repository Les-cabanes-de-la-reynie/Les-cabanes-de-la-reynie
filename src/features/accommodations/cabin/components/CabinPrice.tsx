import { P } from '@/shared/components/P'
import { getTranslations } from 'next-intl/server'
import { getCabin } from '../infrastructure/queries/getCabin'

export const CabinPrice = async () => {
  const tAccommodations = await getTranslations('Accommodations')

  const cabin = await getCabin()

  const price = cabin?.price || 'N/A'
  return (
    <P className='text-foreground'>
      <span>{tAccommodations('averagePrice')}</span>
      <span className='font-bold ml-2 text-2xl'>{price}€</span>
    </P>
  )
}
