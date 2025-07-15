import { Heading } from '@/shared/components/Heading'
import { Separator } from '@/shared/components/ui/separator'
import { getQueryClient } from '@/shared/lib/get-query-client'
import { dehydrate, HydrationBoundary } from '@tanstack/react-query'
import { CabinForm } from './CabinForm'
import { CabinUploadImage } from './CabinUploadImage'
import { getCabinOptions } from './infrastructure/getCabinOptions'

type CabinProps = {
  cabinFormTitle: string
  cabinUploadImageTitle: string
}

export const Cabin = ({
  cabinFormTitle,
  cabinUploadImageTitle
}: CabinProps) => {
  const queryClient = getQueryClient()
  void queryClient.prefetchQuery(getCabinOptions)

  return (
    <>
      <Heading level={3} className='my-4'>
        {cabinFormTitle}
      </Heading>

      <HydrationBoundary state={dehydrate(queryClient)}>
        <CabinForm />
      </HydrationBoundary>

      <Separator className='my-6' />

      <Heading level={3} className='my-4'>
        {cabinUploadImageTitle}
      </Heading>
      <CabinUploadImage />
    </>
  )
}
