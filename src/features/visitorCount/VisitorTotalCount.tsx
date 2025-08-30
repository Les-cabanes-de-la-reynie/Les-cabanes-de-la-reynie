'use client'

import { Heading } from '@/shared/components/Heading'
import { P } from '@/shared/components/P'
import { useQuery } from '@tanstack/react-query'
import { getVisitorCountOptions } from './infrastructure/getVisitorCountOptions'

export const VisitorTotalCount = () => {
  const { data: visitorCount = 0, isLoading } = useQuery(getVisitorCountOptions)

  if (isLoading) return <P>Chargement des visiteurs...</P>

  return (
    <>
      <Heading level={3} className='my-4'>
        Visiteurs
      </Heading>
      <P>Total : {visitorCount}</P>
    </>
  )
}
