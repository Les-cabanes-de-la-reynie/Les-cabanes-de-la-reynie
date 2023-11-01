import { PropsWithChildren } from 'react'
import Heading from '@/components/elements/Heading'

interface PracticalInformationCardProps extends PropsWithChildren {
  description: string
}

const PracticalInformationCard = ({
  children,
  description
}: PracticalInformationCardProps) => {
  return (
    <li className='flex min-w-[200px] flex-col items-center rounded-lg bg-card p-4 text-center'>
      {children}
      <Heading level={4} className='mt-6 font-normal'>
        {description}
      </Heading>
    </li>
  )
}
export default PracticalInformationCard
