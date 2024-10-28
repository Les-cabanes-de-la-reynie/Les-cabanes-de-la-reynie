import { Container } from '@/components/Container'
import { Heading } from '@/components/Heading'
import { P } from '@/components/P'
import { useTranslations } from 'next-intl'

export const AccommodationsDescription = () => {
  const t = useTranslations('Home')

  return (
    <Container>
      <div className=' w-full'>
        <Heading level={3}>{t('accommodationsTitle')}</Heading>
        <P>{t('accommodationsP1')}</P>
        <P>{t('accommodationsP2')}</P>
      </div>
    </Container>
  )
}
