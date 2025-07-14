import { Heading } from '@/shared/components/Heading'
import { P } from '@/shared/components/P'
import { getVisitorCount } from './infrastructure/getVisitorCount'

export const VisitorTotalCount = async () => {
  const visitorCount = await getVisitorCount()

  return (
    <>
      <Heading level={3} className='my-4'>
        Visiteurs
      </Heading>
      <P>Total : {visitorCount}</P>
    </>
  )
}
