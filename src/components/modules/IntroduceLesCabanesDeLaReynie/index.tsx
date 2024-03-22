import Container from '@/components/elements/Container'
import Heading from '@/components/elements/Heading'
import P from '@/components/elements/P'
import natureImage from '@/components/images/background/nature.svg'
import Image from 'next/image'

const IntroduceLesCabanesDeLaReynie = () => {
  const TEXT_TITLE = `[TODO] Let's introduce ourselves`

  const P1 = `Lorem Ipsum is simply dummy text of the printing and typesetting
  industry. Lorem Ipsum has been the industry's standard dummy text
  ever since the 1500s, when an unknown printer took a galley of type
  and scrambled it to make a type specimen book.`

  const P2 = `Lorem Ipsum is simply dummy text of the printing and typesetting
  industry. Lorem Ipsum has been the industry's standard dummy text
  ever since the 1500s, when an unknown printer took a galley of type
  and scrambled it to make a type specimen book. It has survived not
  only five centuries, but also the leap into electronic typesetting,
  remaining essentially unchanged. It was popularised in the 1960s
  with the release of Letraset sheets containing Lorem Ipsum passages,
  and more recently with desktop publishing software like Aldus
  PageMaker including versions of Lorem Ipsum.`

  return (
    <Container>
      <div className='min-h-72 w-full'>
        <Image
          src={natureImage}
          alt='nature-drawing-background'
          height={50}
          width={150}
          className='float-right hidden h-64 w-64 xs:block'
        />

        <div className='block h-full'>
          <Heading level={2}>{TEXT_TITLE}</Heading>
          <P>{P1}</P>
          <P>{P2}</P>
        </div>
      </div>
    </Container>
  )
}
export default IntroduceLesCabanesDeLaReynie
