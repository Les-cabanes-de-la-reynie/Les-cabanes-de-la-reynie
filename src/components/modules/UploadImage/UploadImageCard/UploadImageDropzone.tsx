'use client'

import { useTranslations } from 'next-intl'
import { toast } from 'sonner'
import { UploadDropzone } from '@/lib/uploadthing'
import { UploadImageCategoryKeyEnum } from '@/_types/uploadImage'
import { updateMultipleUploadedImage } from '@/services/actions/updateMultipleUploadedImage'
import { updateSingleUploadedImage } from '@/services/actions/updateSingleUploadedImage'

type UploadImageDropzoneProps = {
  endpoint: UploadImageCategoryKeyEnum
}

const UploadImageDropzone = ({ endpoint }: UploadImageDropzoneProps) => {
  const t = useTranslations('Common')

  return (
    <UploadDropzone
      endpoint={endpoint}
      onClientUploadComplete={async res => {
        const { key, url } = res[0]

        if (
          endpoint ===
          (UploadImageCategoryKeyEnum.YurtSlider ||
            UploadImageCategoryKeyEnum.HutSlider)
        ) {
          await updateMultipleUploadedImage({ key, url, category: endpoint })
        } else {
          await updateSingleUploadedImage({ key, url, category: endpoint })
        }

        toast.success('Success ! Your upload is completed', {
          action: {
            label: t('close'),
            onClick: () => toast.dismiss()
          }
        })
      }}
      onUploadError={(error: Error) => {
        toast.error(`Upload failed ! Reason: ${error.message}`, {
          action: {
            label: t('close'),
            onClick: () => toast.dismiss()
          }
        })
      }}
      appearance={{
        button: 'ut-uploading:cursor-not-allowed rounded-lg bg-primary-dark',
        container:
          'flex flex-col items-center justify-between rounded-lg border border-muted bg-popover'
      }}
    />
  )
}
export default UploadImageDropzone
