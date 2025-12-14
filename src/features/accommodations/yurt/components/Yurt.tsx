import { Heading } from '@/shared/components/Heading'
import { Separator } from '@/shared/components/ui/separator'
import { YurtForm } from './YurtForm'
import { YurtUploadedImages } from './YurtUploadedImages'

type YurtProps = {
  yurtFormTitle: string
  yurtUploadImageTitle: string
}

export const Yurt = ({ yurtFormTitle, yurtUploadImageTitle }: YurtProps) => {
  return (
    <>
      <Heading level={3} className='my-4'>
        {yurtFormTitle}
      </Heading>

      <YurtForm />

      <Separator className='my-6' />

      <Heading level={3} className='my-4'>
        {yurtUploadImageTitle}
      </Heading>
      <YurtUploadedImages />
    </>
  )
}
