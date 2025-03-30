import { Heading } from '@/components/Heading'
import { Separator } from '@/components/ui/separator'
import { CabinUploadImage } from '@/features/cabin/CabinUploadImage'
import { getCabinData } from '@/features/cabin/infrastructure/getCabinData'
import { unstable_noStore } from 'next/cache'
import { CabinForm } from './CabinForm'

type CabinProps = {
  cabinFormTitle: string
  cabinUploadImageTitle: string
}

export const Cabin = async ({
  cabinFormTitle,
  cabinUploadImageTitle
}: CabinProps) => {
  unstable_noStore()

  const cabin = await getCabinData()

  return (
    <>
      <Heading level={3} className='my-4'>
        {cabinFormTitle}
      </Heading>
      <CabinForm cabin={cabin} />

      <Separator className='my-6' />

      <Heading level={3} className='my-4'>
        {cabinUploadImageTitle}
      </Heading>
      <CabinUploadImage />
    </>
  )
}
