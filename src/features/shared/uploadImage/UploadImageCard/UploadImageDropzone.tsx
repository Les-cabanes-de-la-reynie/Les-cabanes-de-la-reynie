'use client'

import { updateUploadedImage } from '@/features/shared/uploadImage/infrastructure/actions/updateUploadedImage'
import { UploadDropzone } from '@/shared/lib/uploadthing'
import { useTranslations } from 'next-intl'
import { toast } from 'sonner'
import { UploadImageCategoryKeyEnum } from '../types'

type UploadImageDropzoneProps = {
  endpoint: UploadImageCategoryKeyEnum
}

export const UploadImageDropzone = ({ endpoint }: UploadImageDropzoneProps) => {
  const t = useTranslations('Common')

  return (
    <UploadDropzone
      endpoint={endpoint}
      onClientUploadComplete={async res => {
        const { key, url } = res[0]

        await updateUploadedImage({ key, url, category: endpoint })

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
        button: 'ut-uploading:cursor-not-allowed rounded-lg bg-primary',
        container:
          'flex flex-col items-center justify-between rounded-lg border border-muted bg-popover py-4'
      }}
    />
  )
}
