import { UploadImageCategoryKeyEnum } from '@/_types/uploadImage'
import Heading from '@/components/elements/Heading'
import UploadHeaderCard from '../UploadHeaderCard'

const HutHeaderUpload = () => {
  return (
    <div className='w-full'>
      <Heading level={4} className='mt-2'>
        Header image
      </Heading>
      <UploadHeaderCard endpoint={UploadImageCategoryKeyEnum.HutHeader} />
    </div>
  )
}
export default HutHeaderUpload
