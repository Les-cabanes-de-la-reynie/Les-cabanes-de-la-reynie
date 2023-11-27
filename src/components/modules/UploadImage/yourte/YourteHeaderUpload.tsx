import Heading from '@/components/elements/Heading'
import UploadHeaderCard from '../UploadHeaderCard'
import { YOURTE_HEADER_KEY } from '@/_constants/uploadImage'

const YourteHeaderUpload = () => {
  return (
    <div className='w-full'>
      <Heading level={4} className='mt-2'>
        Header image
      </Heading>
      <UploadHeaderCard endpoint={YOURTE_HEADER_KEY} />
    </div>
  )
}
export default YourteHeaderUpload
