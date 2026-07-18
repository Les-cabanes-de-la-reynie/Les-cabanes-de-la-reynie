import { Container } from '@/shared/components/Container'
import { Heading } from '@/shared/components/Heading'
import { P } from '@/shared/components/P'
import { useTranslations } from 'next-intl'

export const IntroduceLesCabanesDeLaReynie = () => {
  const t = useTranslations('Home')

  return (
    <Container>
      <div className='w-full'>
        <Heading level={2}>{t('aboutUsTitle')}</Heading>
        <P>{t('aboutUsP1')}</P>
        <P>{t('aboutUsP2')}</P>
        <P>{t('aboutUsP3')}</P>
        <P>{t('aboutUsP4')}</P>
      </div>
    </Container>
  )
}
