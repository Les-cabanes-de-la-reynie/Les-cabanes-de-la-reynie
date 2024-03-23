import P from '@/components/elements/P'
import { Card } from '@/components/ui/card'
import { PropsWithChildren } from 'react'

type PracticalInformationCardProps = PropsWithChildren & {
  description: string
}

const PracticalInformationCard = ({
  children,
  description
}: PracticalInformationCardProps) => {
  return (
    <li>
      <Card className='flex flex-col items-center p-4 text-center'>
        {children}
        <P className='mt-6 font-normal'>{description}</P>
      </Card>
    </li>
  )
}
export default PracticalInformationCard
