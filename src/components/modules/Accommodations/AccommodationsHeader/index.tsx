import { PropsWithChildren } from 'react'

type AccommodationsHeaderProps = PropsWithChildren

const AccommodationsHeader = async ({
  children
}: AccommodationsHeaderProps) => {
  return <header className='grid grid-cols-1 lg:grid-cols-2'>{children}</header>
}
export default AccommodationsHeader
