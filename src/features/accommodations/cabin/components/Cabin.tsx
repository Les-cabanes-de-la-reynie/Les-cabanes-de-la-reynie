import { Heading } from '@/shared/components/Heading'
import { Separator } from '@/shared/components/ui/separator'
import { getCabin } from '../infrastructure/queries/getCabin'
import { CabinForm } from './CabinForm'
import { CabinUploadedImages } from './CabinUploadedImages'

type CabinProps = {
  cabinFormTitle: string
  cabinUploadImageTitle: string
}

export const Cabin = async ({
  cabinFormTitle,
  cabinUploadImageTitle
}: CabinProps) => {
  const cabinData = await getCabin()

  return (
    <>
      <Heading level={3} className='my-4'>
        {cabinFormTitle}
      </Heading>

      <CabinForm defaultPrice={cabinData.price} />

      <Separator className='my-6' />

      <Heading level={3} className='my-4'>
        {cabinUploadImageTitle}
      </Heading>
      <CabinUploadedImages />
    </>
  )
}
