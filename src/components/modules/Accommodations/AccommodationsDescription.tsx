import Container from '@/components/elements/Container'
import Heading from '@/components/elements/Heading'
import P from '@/components/elements/P'
import { useTranslations } from 'next-intl'

const AccommodationsDescription = () => {
  const t = useTranslations('Home')

  return (
    <Container>
      <div className=' w-full'>
        <Heading level={2}>{t('accommodationsTitle')}</Heading>
        <P>{t('accommodationsP1')}</P>
        <P>{t('accommodationsP2')}</P>
      </div>
    </Container>
  )
}
export default AccommodationsDescription
