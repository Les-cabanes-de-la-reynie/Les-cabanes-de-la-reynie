'use client'

import Heading from '@/components/elements/Heading'
import P from '@/components/elements/P'
import { Separator } from '@/components/ui/separator'
import { UploadDropzone } from '@/lib/uploadthing'
import { useUser } from '@auth0/nextjs-auth0/client'
import { toast } from 'sonner'

const UploadImage = () => {
  const { user, error } = useUser()

  if (error || !user?.email) {
    return null
  }

  return (
    <div>
      <Heading level={2} className='mt-8'>
        Upload image
      </Heading>
      <P>
        Il faudrait dans l'idéal mettre des images uniquement en format WEBP
      </P>

      <Heading level={3} className='mt-4'>
        Yourte
      </Heading>
      <div className='flex flex-col justify-between gap-8 md:flex-row'>
        <div className='w-full'>
          <Heading level={4} className='mt-2'>
            Header image
          </Heading>
          <UploadDropzone
            endpoint='yourteImages'
            onClientUploadComplete={() => toast.success('Upload Completed')}
            onUploadError={(error: Error) => {
              toast.error(`ERROR! ${error.message}`)
            }}
            appearance={{
              button:
                'ut-uploading:cursor-not-allowed rounded-lg bg-primary-dark',
              container:
                'flex flex-col items-center justify-between rounded-lg border border-muted bg-popover'
            }}
          />
        </div>
        <div className='w-full'>
          <Heading level={4} className='mt-2'>
            Slider images
          </Heading>
          <UploadDropzone
            endpoint='yourteImages'
            onClientUploadComplete={() => toast.success('Upload Completed')}
            onUploadError={(error: Error) => {
              toast.error(`ERROR! ${error.message}`)
            }}
            appearance={{
              button:
                'ut-uploading:cursor-not-allowed rounded-lg bg-primary-dark',
              container:
                'flex flex-col items-center justify-between rounded-lg border border-muted bg-popover'
            }}
          />
        </div>
      </div>

      <Separator className='my-10' />

      <Heading level={3} className='mt-4'>
        Cabane
      </Heading>

      <div className='flex flex-col justify-between gap-8 md:flex-row'>
        <div className='w-full'>
          <Heading level={4} className='mt-2'>
            Header image
          </Heading>
          <UploadDropzone
            endpoint='cabaneImages'
            onClientUploadComplete={() => toast.success('Upload Completed')}
            onUploadError={(error: Error) => {
              toast.error(`ERROR! ${error.message}`)
            }}
            appearance={{
              button:
                'ut-uploading:cursor-not-allowed rounded-lg bg-primary-dark',
              container:
                'flex flex-col items-center justify-between rounded-lg border border-muted bg-popover'
            }}
          />
        </div>
        <div className='w-full'>
          <Heading level={4} className='mt-2'>
            Slider images
          </Heading>
          <UploadDropzone
            endpoint='cabaneImages'
            onClientUploadComplete={() => toast.success('Upload Completed')}
            onUploadError={(error: Error) => {
              toast.error(`ERROR! ${error.message}`)
            }}
            appearance={{
              button:
                'ut-uploading:cursor-not-allowed rounded-lg bg-primary-dark',
              container:
                'flex flex-col items-center justify-between rounded-lg border border-muted bg-popover'
            }}
          />
        </div>
      </div>
    </div>
  )
}
export default UploadImage
