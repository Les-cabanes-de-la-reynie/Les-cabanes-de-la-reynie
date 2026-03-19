import { Heading } from '@/shared/components/Heading'
import { Separator } from '@/shared/components/ui/separator'
import { getYurt } from '../infrastructure/queries/getYurt'
import { YurtForm } from './YurtForm'
import { YurtUploadedImages } from './YurtUploadedImages'

type YurtProps = {
  yurtFormTitle: string
  yurtUploadImageTitle: string
}

export const Yurt = async ({
  yurtFormTitle,
  yurtUploadImageTitle
}: YurtProps) => {
  const yurtData = await getYurt()

  return (
    <>
      <Heading level={3} className='my-4'>
        {yurtFormTitle}
      </Heading>

      <YurtForm defaultPrice={yurtData.price} />

      <Separator className='my-6' />

      <Heading level={3} className='my-4'>
        {yurtUploadImageTitle}
      </Heading>
      <YurtUploadedImages />
    </>
  )
}
