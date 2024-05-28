import Container from '@/components/elements/Container'
import Heading from '@/components/elements/Heading'
import P from '@/components/elements/P'
import { useTranslations } from 'next-intl'
import OurGourmetOfferList from './OurGourmetOfferList'

const OurGourmetOffer = () => {
  const t = useTranslations('Accommodations')
  return (
    <Container>
      <section>
        <Heading level={2}>{t('accommodationsDescriptionTitle')}</Heading>
        <P>{t('accommodationsDescriptionP1')}</P>

        <Heading level={3} className='mt-4 mb-2'>
          {t('ourGourmetOffer')}
        </Heading>
        <OurGourmetOfferList />
      </section>
    </Container>
  )
}
export default OurGourmetOffer
