import {
  CABANE_HEADER_KEY,
  CABANE_SLIDER_KEY,
  YOURTE_HEADER_KEY,
  YOURTE_SLIDER_KEY
} from '@/_constants/uploadImage'
import { UploadDropzone } from '@/lib/uploadthing'
import { toast } from 'sonner'
import { updateUploadImage } from '@/services/actions/updateUploadImage'

type UploadHeaderCardProps = {
  endpoint:
    | typeof YOURTE_HEADER_KEY
    | typeof YOURTE_SLIDER_KEY
    | typeof CABANE_HEADER_KEY
    | typeof CABANE_SLIDER_KEY
}

const UploadHeaderCard = ({ endpoint }: UploadHeaderCardProps) => {
  return (
    <UploadDropzone
      endpoint={endpoint}
      onClientUploadComplete={async res => {
        const { key, url } = res[0]

        await updateUploadImage({ key, url, category: endpoint })

        toast.success('Success ! Your upload is completed')
      }}
      onUploadError={(error: Error) => {
        toast.error(`Upload failed ! Reason: ${error.message}`)
      }}
      appearance={{
        button: 'ut-uploading:cursor-not-allowed rounded-lg bg-primary-dark',
        container:
          'flex flex-col items-center justify-between rounded-lg border border-muted bg-popover'
      }}
    />
  )
}
export default UploadHeaderCard
