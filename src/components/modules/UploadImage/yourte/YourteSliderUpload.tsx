import { YOURTE_SLIDER_KEY } from '@/_constants/uploadImage'
import Heading from '@/components/elements/Heading'
import UploadHeaderCard from '../UploadHeaderCard'

const YourteSliderUpload = () => {
  return (
    <div className='w-full'>
      <Heading level={4} className='mt-2'>
        Slider images
      </Heading>
      <UploadHeaderCard endpoint={YOURTE_SLIDER_KEY} />
    </div>
  )
}
export default YourteSliderUpload
