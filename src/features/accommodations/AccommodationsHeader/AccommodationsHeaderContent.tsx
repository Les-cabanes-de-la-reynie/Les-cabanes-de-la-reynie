import { Container } from '@/shared/components/Container'
import { PropsWithChildren } from 'react'

type AccommodationsHeaderContentProps = PropsWithChildren

export const AccommodationsHeaderContent = ({
  children
}: AccommodationsHeaderContentProps) => {
  return (
    <Container className='flex flex-col justify-center'>{children}</Container>
  )
}
