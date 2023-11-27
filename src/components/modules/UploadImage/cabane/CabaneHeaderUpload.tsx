import { CABANE_HEADER_KEY } from '@/_constants/uploadImage'
import Heading from '@/components/elements/Heading'
import UploadHeaderCard from '../UploadHeaderCard'

const CabaneHeaderUpload = () => {
  return (
    <div className='w-full'>
      <Heading level={4} className='mt-2'>
        Header image
      </Heading>
      <UploadHeaderCard endpoint={CABANE_HEADER_KEY} />
    </div>
  )
}
export default CabaneHeaderUpload
