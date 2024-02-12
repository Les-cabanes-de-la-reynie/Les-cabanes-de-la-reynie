import Container from '@/components/elements/Container'
import { PropsWithChildren } from 'react'

type AccommodationsHeaderContentProps = PropsWithChildren

const AccommodationsHeaderContent = ({
  children
}: AccommodationsHeaderContentProps) => {
  return (
    <Container className='flex flex-col justify-center lg:p-10'>
      {children}
    </Container>
  )
}
export default AccommodationsHeaderContent
