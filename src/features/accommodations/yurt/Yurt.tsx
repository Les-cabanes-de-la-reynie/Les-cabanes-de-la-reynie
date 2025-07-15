import { Heading } from '@/shared/components/Heading'
import { Separator } from '@/shared/components/ui/separator'
import { getQueryClient } from '@/shared/lib/get-query-client'
import { dehydrate, HydrationBoundary } from '@tanstack/react-query'
import { getYurtOptions } from './infrastructure/getYurtOptions'
import { YurtForm } from './YurtForm'
import { YurtUploadImage } from './YurtUploadImage'

type YurtProps = {
  yurtFormTitle: string
  yurtUploadImageTitle: string
}

export const Yurt = async ({
  yurtFormTitle,
  yurtUploadImageTitle
}: YurtProps) => {
  const queryClient = getQueryClient()
  void queryClient.prefetchQuery(getYurtOptions)

  return (
    <>
      <Heading level={3} className='my-4'>
        {yurtFormTitle}
      </Heading>

      <HydrationBoundary state={dehydrate(queryClient)}>
        <YurtForm />
      </HydrationBoundary>

      <Separator className='my-6' />

      <Heading level={3} className='my-4'>
        {yurtUploadImageTitle}
      </Heading>
      <YurtUploadImage />
    </>
  )
}
