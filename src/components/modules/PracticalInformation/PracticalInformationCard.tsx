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
    <li className='flex flex-col items-center justify-center'>
      {children}
      <Heading level={4} className='mt-6 font-normal'>
        {description}
      </Heading>
    </li>
  )
}
export default PracticalInformationCard
