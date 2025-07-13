import { SEO } from '@/shared/_constants/SEO'
import { Container } from '@/shared/components/Container'
import { Heading } from '@/shared/components/Heading'
import { Metadata } from 'next'
import { ActivityCardList } from './components/ActivityCardList'

export const metadata: Metadata = {
  title: SEO.activity.title,
  description: SEO.activity.description
}

const Activites = () => {
  return (
    <Container>
      <section>
        <Heading level={1} className='my-8 text-center'>
          ACTIVITES
        </Heading>

        <ActivityCardList />
      </section>
    </Container>
  )
}

export default Activites
