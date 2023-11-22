'use client'

import Heading from '@/components/elements/Heading'
import P from '@/components/elements/P'
import { Separator } from '@/components/ui/separator'
import { useUser } from '@auth0/nextjs-auth0/client'
import UploadImageCard from './UploadImageCard'

const UploadImage = () => {
  const { user, error } = useUser()

  if (error || !user?.email) {
    return null
  }

  return (
    <section>
      <Heading level={2} className='mt-8'>
        Upload image
      </Heading>
      <P>
        Il faudrait mettre dans la mesure du possible des images uniquement en
        format WEBP
      </P>

      <Heading level={3} className='mt-4'>
        Yourte
      </Heading>
      <div className='flex flex-col justify-between gap-8 md:flex-row'>
        <div className='w-full'>
          <Heading level={4} className='mt-2'>
            Header image
          </Heading>
          <UploadImageCard endpoint='yourteHeader' />
        </div>
        <div className='w-full'>
          <Heading level={4} className='mt-2'>
            Slider images
          </Heading>
          <UploadImageCard endpoint='yourteSlider' />
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
          <UploadImageCard endpoint='cabaneHeader' />
        </div>
        <div className='w-full'>
          <Heading level={4} className='mt-2'>
            Slider images
          </Heading>
          <UploadImageCard endpoint='cabaneSlider' />
        </div>
      </div>
    </section>
  )
}
export default UploadImage
