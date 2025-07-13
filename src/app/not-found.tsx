import { PAGE_ROUTES } from '@/shared/_constants/page'
import { Container } from '@/shared/components/Container'
import { Heading } from '@/shared/components/Heading'
import { P } from '@/shared/components/P'
import { Button } from '@/shared/components/ui/button'
import { useTranslations } from 'next-intl'
import Link from 'next/link'

const NotFound = () => {
  const t = useTranslations('Errors')

  return (
    <Container center>
      <Heading level={2}>{t('shortError404')}</Heading>
      <P>{t('longError404')}</P>
      <Button asChild className='mt-4'>
        <Link href={PAGE_ROUTES.home}>{t('backButtonMessage')}</Link>
      </Button>
    </Container>
  )
}

export default NotFound
