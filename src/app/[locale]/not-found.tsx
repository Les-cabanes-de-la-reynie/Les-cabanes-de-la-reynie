import { Link } from '@/i18n/navigation'
import { ESTABLISHMENT_TITLE } from '@/shared/_constants/establishmentInformation'
import { PAGE_ROUTES } from '@/shared/_constants/page'
import { Container } from '@/shared/components/Container'
import { Heading } from '@/shared/components/Heading'
import { P } from '@/shared/components/P'
import { Button } from '@/shared/components/ui/button'
import { Metadata } from 'next'
import { useTranslations } from 'next-intl'
import { getTranslations } from 'next-intl/server'

// The layout's metadata doesn't reach the 404 response
export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('Errors')

  return {
    title: { absolute: `${t('shortError404')} - ${ESTABLISHMENT_TITLE}` }
  }
}

export default function NotFound() {
  const t = useTranslations('Errors')

  return (
    <Container center>
      <Heading level={2}>{t('shortError404')}</Heading>
      <P className='text-center'>{t('longError404')}</P>
      <Button asChild className='mt-4'>
        <Link href={PAGE_ROUTES.home}>{t('backButtonMessage')}</Link>
      </Button>
    </Container>
  )
}
