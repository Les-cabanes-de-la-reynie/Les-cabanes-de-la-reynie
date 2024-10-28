import { Heading } from '@/components/Heading'
import { P } from '@/components/P'
import { Button } from '@/components/ui/button'
import { useLocale, useTranslations } from 'next-intl'
import Link from 'next/link'

const NotFound = () => {
  const t = useTranslations('Errors')
  const lang = useLocale()

  return (
    <div className='flex w-full flex-col items-center justify-center  p-4'>
      <Heading level={2}>{t('shortError404')}</Heading>
      <P>{t('longError404')}</P>
      <Button asChild className='mt-4'>
        <Link href={`/${lang}`}>{t('backButtonMessage')}</Link>
      </Button>
    </div>
  )
}

export default NotFound
