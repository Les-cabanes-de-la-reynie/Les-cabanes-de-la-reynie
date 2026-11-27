import { PropsWithChildren } from 'react'

export const PracticalInformationList = ({ children }: PropsWithChildren) => {
  return (
    <ul className='grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-5 lg:grid-cols-4'>
      {children}
    </ul>
  )
}
