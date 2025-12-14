import { Heading } from '@/shared/components/Heading'
import { Separator } from '@/shared/components/ui/separator'
import { CabinForm } from './CabinForm'
import { CabinUploadedImages } from './CabinUploadedImages'

type CabinProps = {
  cabinFormTitle: string
  cabinUploadImageTitle: string
}

export const Cabin = ({
  cabinFormTitle,
  cabinUploadImageTitle
}: CabinProps) => {
  return (
    <>
      <Heading level={3} className='my-4'>
        {cabinFormTitle}
      </Heading>

      <CabinForm />

      <Separator className='my-6' />

      <Heading level={3} className='my-4'>
        {cabinUploadImageTitle}
      </Heading>
      <CabinUploadedImages />
    </>
  )
}
