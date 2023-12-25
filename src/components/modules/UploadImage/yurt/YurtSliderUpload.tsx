import { UploadImageCategoryKeyEnum } from '@/_types/uploadImage'
import Heading from '@/components/elements/Heading'
import UploadHeaderCard from '../UploadHeaderCard'

const YurtSliderUpload = () => {
  return (
    <div className='w-full'>
      <Heading level={4} className='mt-2'>
        Slider images
      </Heading>
      <UploadHeaderCard endpoint={UploadImageCategoryKeyEnum.YurtSlider} />
    </div>
  )
}
export default YurtSliderUpload
