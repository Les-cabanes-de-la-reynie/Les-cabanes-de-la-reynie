import { PropsWithChildren } from 'react'

type AccommodationsHeaderImageProps = PropsWithChildren

const AccommodationsHeaderImage = ({
  children
}: AccommodationsHeaderImageProps) => {
  return (
    <div className='relative h-96 w-full select-none bg-popover lg:h-[calc(100vh-4.5rem)]'>
      {children}
    </div>
  )
}
export default AccommodationsHeaderImage
