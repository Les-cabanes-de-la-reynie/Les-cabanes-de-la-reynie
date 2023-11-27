'use client'

import Heading from '@/components/elements/Heading'
import P from '@/components/elements/P'
import { Separator } from '@/components/ui/separator'
import { useUser } from '@auth0/nextjs-auth0/client'
import YourteHeaderUpload from './yourte/YourteHeaderUpload'
import YourteSliderUpload from './yourte/YourteSliderUpload'
import CabaneHeaderUpload from './cabane/CabaneHeaderUpload'
import CabaneSliderUpload from './cabane/CabaneSliderUpload'

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
        <YourteHeaderUpload />
        <YourteSliderUpload />
      </div>

      <Separator className='my-10' />

      <Heading level={3} className='mt-4'>
        Cabane
      </Heading>

      <div className='flex flex-col justify-between gap-8 md:flex-row'>
        <CabaneHeaderUpload />
        <CabaneSliderUpload />
      </div>
    </section>
  )
}
export default UploadImage
