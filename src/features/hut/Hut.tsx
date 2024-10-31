import { Heading } from '@/components/Heading'
import { Separator } from '@/components/ui/separator'
import { HutUploadImage } from '@/features/hut/HutUploadImage'
import { getHutData } from '@/features/hut/infrastructure/getHutData'
import { unstable_noStore } from 'next/cache'
import { HutForm } from './HutForm'

type HutProps = {
  hutFormTitle: string
  hutUploadImageTitle: string
}

export const Hut = async ({ hutFormTitle, hutUploadImageTitle }: HutProps) => {
  unstable_noStore()

  const hut = await getHutData()

  return (
    <>
      <Heading level={3} className='my-4'>
        {hutFormTitle}
      </Heading>
      <HutForm hut={hut} />

      <Separator className='my-6' />

      <Heading level={3} className='my-4'>
        {hutUploadImageTitle}
      </Heading>
      <HutUploadImage />
    </>
  )
}
