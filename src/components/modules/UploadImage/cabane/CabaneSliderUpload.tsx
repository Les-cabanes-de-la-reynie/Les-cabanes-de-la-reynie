import Heading from '@/components/elements/Heading'
import UploadHeaderCard from '../UploadHeaderCard'
import { CABANE_SLIDER_KEY } from '@/_constants/uploadImage'

const CabaneSliderUpload = () => {
  return (
    <div className='w-full'>
      <Heading level={4} className='mt-2'>
        Slider images
      </Heading>
      <UploadHeaderCard endpoint={CABANE_SLIDER_KEY} />
    </div>
  )
}
export default CabaneSliderUpload
