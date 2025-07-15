'use client'

import { P } from '@/shared/components/P'
import { useSuspenseQuery } from '@tanstack/react-query'
import { useTranslations } from 'next-intl'
import { getCabinOptions } from './infrastructure/getCabinOptions'

export const CabinPrice = () => {
  const tAccommodations = useTranslations('Accommodations')

  const { data: cabin } = useSuspenseQuery(getCabinOptions)

  const price = cabin?.price || 'N/A'
  return (
    <P className='text-foreground'>
      <span>{tAccommodations('averagePrice')}</span>
      <span className='font-bold ml-2 text-2xl'>{price}€</span>
    </P>
  )
}
