import Heading from '@/components/elements/Heading'
import UploadHeaderCard from '../UploadHeaderCard'
import { UploadImageCategoryKeyEnum } from '@/_types/uploadImage'

const HutSliderUpload = () => {
  return (
    <div className='w-full'>
      <Heading level={4} className='mt-2'>
        Slider images
      </Heading>
      <UploadHeaderCard endpoint={UploadImageCategoryKeyEnum.HutSlider} />
    </div>
  )
}
export default HutSliderUpload
