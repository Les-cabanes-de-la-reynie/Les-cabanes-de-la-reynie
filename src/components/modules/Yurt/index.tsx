import Heading from '@/components/elements/Heading'
import { Separator } from '@/components/ui/separator'
import { getYurtData } from '@/services/queries/yurt'
import { unstable_noStore } from 'next/cache'
import YurtUploadImage from '../UploadImage/YurtUploadImage'
import YurtForm from './YurtForm'

type YurtProps = {
  yurtFormTitle: string
  yurtUploadImageTitle: string
}

const Yurt = async ({ yurtFormTitle, yurtUploadImageTitle }: YurtProps) => {
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
export default Yurt
