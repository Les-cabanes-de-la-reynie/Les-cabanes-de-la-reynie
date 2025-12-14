'use client'

import { P } from '@/shared/components/P'
import { useTranslations } from 'next-intl'
import { getYurt } from '../infrastructure/queries/getYurt'

export const YurtPrice = async () => {
  const tAccommodations = useTranslations('Accommodations')

  const yurt = await getYurt()

  const price = yurt?.price || 'N/A'
  return (
    <P className='text-foreground'>
      <span>{tAccommodations('averagePrice')}</span>
      <span className='font-bold ml-2 text-2xl'>{price}€</span>
    </P>
  )
}
