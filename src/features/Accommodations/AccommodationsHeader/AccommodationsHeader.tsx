import { PropsWithChildren } from 'react'

type AccommodationsHeaderProps = PropsWithChildren

export const AccommodationsHeader = async ({
  children
}: AccommodationsHeaderProps) => {
  return (
    <header className='mb-10 grid grid-cols-1 lg:grid-cols-2'>
      {children}
    </header>
  )
}
