import { Container } from '@/components/Container'
import { Heading } from '@/components/Heading'
import { P } from '@/components/P'
import { useTranslations } from 'next-intl'
import { OurGourmetOfferList } from './OurGourmetOfferList'

export const OurGourmetOffer = () => {
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
