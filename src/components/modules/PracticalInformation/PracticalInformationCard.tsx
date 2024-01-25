import P from '@/components/elements/P'
import { PropsWithChildren } from 'react'

type PracticalInformationCardProps = PropsWithChildren & {
  description: string
}

const PracticalInformationCard = ({
  children,
  description
}: PracticalInformationCardProps) => {
  return (
    <li className='flex flex-col items-center rounded-lg bg-popover p-4 text-center text-muted-foreground'>
      {children}
      <P className='mt-6 font-normal'>{description}</P>
    </li>
  )
}
export default PracticalInformationCard
