import Heading from '@/components/elements/Heading'
import { getHutData } from '@/services/queries/hut'
import HutUploadImage from '../UploadImage/HutUploadImage'
import HutForm from './HutForm'

type HutProps = {
  hutFormTitle: string
  hutUploadImageTitle: string
}

const Hut = async ({ hutFormTitle, hutUploadImageTitle }: HutProps) => {
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
