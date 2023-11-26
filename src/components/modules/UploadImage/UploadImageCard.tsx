import {
  CABANE_HEADER_KEY,
  CABANE_SLIDER_KEY,
  YOURTE_HEADER_KEY,
  YOURTE_SLIDER_KEY
} from '@/_constants/uploadImage'
import { UploadDropzone } from '@/lib/uploadthing'
import { toast } from 'sonner'

type UploadImageCardProps = {
  endpoint:
    | typeof YOURTE_HEADER_KEY
    | typeof YOURTE_SLIDER_KEY
    | typeof CABANE_HEADER_KEY
    | typeof CABANE_SLIDER_KEY
}

const UploadImageCard = ({ endpoint }: UploadImageCardProps) => {
  return (
    <UploadDropzone
      endpoint={endpoint}
      onClientUploadComplete={() => toast.success('Upload Completed')}
      onUploadError={(error: Error) => {
        toast.error(`ERROR! ${error.message}`)
      }}
      appearance={{
        button: 'ut-uploading:cursor-not-allowed rounded-lg bg-primary-dark',
        container:
          'flex flex-col items-center justify-between rounded-lg border border-muted bg-popover'
      }}
    />
  )
}
export default UploadImageCard
