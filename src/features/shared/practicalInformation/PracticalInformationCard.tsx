import { P } from '@/shared/components/P'
import { Card } from '@/shared/components/ui/card'
import { PropsWithChildren } from 'react'

type PracticalInformationCardProps = PropsWithChildren & {
  description: string
}

export const PracticalInformationCard = ({
  children,
  description
}: PracticalInformationCardProps) => {
  return (
    <li>
      <Card className='flex flex-col items-center p-4 text-center'>
        {children}
        <P className='mt-6 font-normal text-center'>{description}</P>
      </Card>
    </li>
  )
}
