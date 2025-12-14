'use client'

import { P } from '@/shared/components/P'
import { useTranslations } from 'next-intl'
import { getCabin } from '../infrastructure/queries/getCabin'

export const CabinPrice = async () => {
  const tAccommodations = useTranslations('Accommodations')

  const cabin = await getCabin()

  const price = cabin?.price || 'N/A'
  return (
    <P className='text-foreground'>
      <span>{tAccommodations('averagePrice')}</span>
      <span className='font-bold ml-2 text-2xl'>{price}€</span>
    </P>
  )
}
