import Heading from '@/components/elements/Heading'
import HomeUploadImage from '../UploadImage/HomeUploadImage'

type HomeProps = {
  homeUploadImageTitle: string
}

const Home = ({ homeUploadImageTitle }: HomeProps) => {
  return (
    <>
      <Heading level={3} className='my-4'>
        {homeUploadImageTitle}
      </Heading>
      <HomeUploadImage />
    </>
  )
}
export default Home
