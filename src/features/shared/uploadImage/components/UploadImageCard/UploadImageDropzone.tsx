'use client'

import { UploadDropzone } from '@/shared/lib/uploadthing'
import { useTranslations } from 'next-intl'
import { toast } from 'sonner'
import { ClientUploadedFileData } from 'uploadthing/types'
import { UploadImageCategoryKeyEnum } from '../../_types'
import { updateUploadedImage } from '../../infrastructure/actions/postUploadImage'
import { compressImage } from '../../utils/compressImage'

type UploadImageDropzoneProps = {
  categoryKey: UploadImageCategoryKeyEnum
}

export const UploadImageDropzone = ({
  categoryKey
}: UploadImageDropzoneProps) => {
  const t = useTranslations('Common')

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleUpload = (res: ClientUploadedFileData<any>[]) => {
    const { key, ufsUrl } = res[0]

    updateUploadedImage({
      key: key,
      url: ufsUrl,
      category: categoryKey
    })
  }

  return (
    <UploadDropzone
      endpoint={categoryKey}
      onBeforeUploadBegin={files => Promise.all(files.map(compressImage))}
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
