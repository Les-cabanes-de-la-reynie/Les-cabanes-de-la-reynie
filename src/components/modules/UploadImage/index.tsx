'use client'

import Heading from '@/components/elements/Heading'
import P from '@/components/elements/P'
import { Separator } from '@/components/ui/separator'
import YurtHeaderUpload from './yurt/YurtHeaderUpload'
import YurtSliderUpload from './yurt/YurtSliderUpload'
import HutHeaderUpload from './hut/HutHeaderUpload'
import HutSliderUpload from './hut/HutSliderUpload'
import { useUser } from '@auth0/nextjs-auth0/client'

const UploadImage = () => {
  const { user, error } = useUser()

  if (error || !user?.email_verified) {
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
        <YurtHeaderUpload />
        <YurtSliderUpload />
      </div>

      <Separator className='my-10' />

      <Heading level={3} className='mt-4'>
        Cabane
      </Heading>

      <div className='flex flex-col justify-between gap-8 md:flex-row'>
        <HutHeaderUpload />
        <HutSliderUpload />
      </div>
    </section>
  )
}
export default UploadImage
