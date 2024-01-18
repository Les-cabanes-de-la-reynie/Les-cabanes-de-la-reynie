import Link from 'next/link'
import { useLocale, useTranslations } from 'next-intl'
import Heading from '@/components/elements/Heading'
import P from '@/components/elements/P'
import { Button } from '@/components/ui/button'

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
