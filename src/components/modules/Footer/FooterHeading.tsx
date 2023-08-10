import { PropsWithChildren } from 'react'
import Heading from '@/components/elements/Heading'

const FooterHeading = ({ children }: PropsWithChildren) => {
  return (
    <Heading level={3} className='mb-4 text-xl font-semibold'>
      {children}
    </Heading>
  )
}
export default FooterHeading
