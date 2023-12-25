import Heading from '@/components/elements/Heading'
import UploadHeaderCard from '../UploadHeaderCard'
import { UploadImageCategoryKeyEnum } from '@/_types/uploadImage'

const YurtHeaderUpload = () => {
  return (
    <div className='w-full'>
      <Heading level={4} className='mt-2'>
        Header image
      </Heading>
      <UploadHeaderCard endpoint={UploadImageCategoryKeyEnum.YurtHeader} />
    </div>
  )
}
export default YurtHeaderUpload
