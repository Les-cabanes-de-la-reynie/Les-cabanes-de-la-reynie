import { UploadDropzone } from '@/lib/uploadthing'
import { toast } from 'sonner'

type UploadImageCardProps = {
  endpoint: 'yourteHeader' | 'yourteSlider' | 'cabaneHeader' | 'cabaneSlider'
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
