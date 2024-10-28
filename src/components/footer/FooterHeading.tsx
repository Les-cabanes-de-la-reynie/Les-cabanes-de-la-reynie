import { Heading } from '@/components/Heading'
import { PropsWithChildren } from 'react'

export const FooterHeading = ({ children }: PropsWithChildren) => {
  return (
    <div className='mb-4'>
      <Heading level={3} className='mb-2 text-xl font-semibold'>
        {children}
      </Heading>
      <div className='h-[2px] w-14 bg-primary' />
    </div>
  )
}