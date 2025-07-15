'use client'

import { P } from '@/shared/components/P'
import { useSuspenseQuery } from '@tanstack/react-query'
import { useTranslations } from 'next-intl'
import { getYurtOptions } from './infrastructure/getYurtOptions'

export const YurtPrice = () => {
  const tAccommodations = useTranslations('Accommodations')

  const { data: yurt } = useSuspenseQuery(getYurtOptions)

  const price = yurt?.price || 'N/A'
  return (
    <P className='text-foreground'>
      <span>{tAccommodations('averagePrice')}</span>
      <span className='font-bold ml-2 text-2xl'>{price}€</span>
    </P>
  )
}
