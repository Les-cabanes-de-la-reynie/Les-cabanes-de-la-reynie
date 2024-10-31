import { Heading } from '@/components/Heading'
import { Separator } from '@/components/ui/separator'
import { getYurtData } from '@/features/yurt/infrastructure/getYurtData'
import { unstable_noStore } from 'next/cache'
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
  unstable_noStore()
  const yurt = await getYurtData()

  return (
    <>
      <Heading level={3} className='my-4'>
        {yurtFormTitle}
      </Heading>
      <YurtForm yurt={yurt} />

      <Separator className='my-6' />

      <Heading level={3} className='my-4'>
        {yurtUploadImageTitle}
      </Heading>
      <YurtUploadImage />
    </>
  )
}
