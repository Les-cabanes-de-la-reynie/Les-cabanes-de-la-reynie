import Heading from '@/components/elements/Heading'
import { getHutData } from '@/services/queries/hut'
import { unstable_noStore } from 'next/cache'
import HutUploadImage from '../UploadImage/HutUploadImage'
import HutForm from './HutForm'

type HutProps = {
  hutFormTitle: string
  hutUploadImageTitle: string
}

const Hut = async ({ hutFormTitle, hutUploadImageTitle }: HutProps) => {
  unstable_noStore()
  const hut = await getHutData()

  return (
    <>
      <Heading level={3} className='my-4'>
        {hutFormTitle}
      </Heading>
      <HutForm hut={hut} />

      <Heading level={3} className='my-4 text-center'>
        {hutUploadImageTitle}
      </Heading>
      <HutUploadImage />
    </>
  )
}
export default Hut
