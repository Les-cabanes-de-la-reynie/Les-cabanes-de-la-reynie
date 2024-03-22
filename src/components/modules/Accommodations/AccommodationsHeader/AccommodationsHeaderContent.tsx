import Container from '@/components/elements/Container'
import { PropsWithChildren } from 'react'

type AccommodationsHeaderContentProps = PropsWithChildren

const AccommodationsHeaderContent = ({
  children
}: AccommodationsHeaderContentProps) => {
  return (
    <Container className='flex flex-col justify-center'>{children}</Container>
  )
}
export default AccommodationsHeaderContent
