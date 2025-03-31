import { Container } from '@/components/Container'
import { Heading } from '@/components/Heading'
import { P } from '@/components/P'
import { Button } from '@/components/ui/button'
import { useTranslations } from 'next-intl'
import Link from 'next/link'

const NotFound = () => {
  const t = useTranslations('Errors')

  return (
    <Container center>
      <Heading level={2}>{t('shortError404')}</Heading>
      <P>{t('longError404')}</P>
      <Button asChild className='mt-4'>
        <Link href='/'>{t('backButtonMessage')}</Link>
      </Button>
    </Container>
  )
}

export default NotFound
