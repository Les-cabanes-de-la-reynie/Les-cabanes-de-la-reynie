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
      <Card className='flex h-full flex-col items-center rounded-2xl border-0 bg-accent px-3 py-5 text-center shadow-none'>
        {children}
        <P className='mt-3.5 text-center text-[0.9375rem] leading-snug text-foreground'>
          {description}
        </P>
      </Card>
    </li>
  )
}
