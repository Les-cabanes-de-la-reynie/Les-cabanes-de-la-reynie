import { PropsWithChildren } from 'react'

const OurGourmetOfferStrong = ({ children }: PropsWithChildren) => {
  return (
    <strong className='before:block before:absolute before:inset-0 before:-skew-y-1 before:bg-primary relative inline-block'>
      <span className='relative text-white'>{children}</span>
    </strong>
  )
}
export default OurGourmetOfferStrong
