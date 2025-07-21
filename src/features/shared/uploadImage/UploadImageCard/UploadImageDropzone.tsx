'use client'

import { UploadDropzone } from '@/shared/lib/uploadthing'
import { useTranslations } from 'next-intl'
import { toast } from 'sonner'
import { UploadImageCategoryKeyEnum } from '../_types'
import { usePostUploadImage } from '../hooks/usePostUploadImage'

type UploadImageDropzoneProps = {
  categoryKey: UploadImageCategoryKeyEnum
}

export const UploadImageDropzone = ({
  categoryKey
}: UploadImageDropzoneProps) => {
  const t = useTranslations('Common')

  const { postUploadImageMutation } = usePostUploadImage()

  const handleUpload = (res: any) => {
    const { key, ufsUrl } = res[0]

    postUploadImageMutation({
      key: key,
      url: ufsUrl,
      category: categoryKey
    })
  }

  return (
    <UploadDropzone
      endpoint={categoryKey}
      onClientUploadComplete={handleUpload}
      onUploadError={(error: Error) => {
        toast.error(`Upload failed ! Reason: ${error.message}`, {
          action: {
            label: t('close'),
            onClick: () => toast.dismiss()
          },
          duration: Infinity
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
