import Heading from '@/components/elements/Heading'
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

      <Heading level={3} className='my-4 text-center'>
        {yurtUploadImageTitle}
      </Heading>
      <YurtUploadImage />
    </>
  )
}
export default Yurt
