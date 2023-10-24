import Link from 'next/link'
import { useLocale, useTranslations } from 'next-intl'
import Heading from 'components/elements/Heading'
import Button from 'components/elements/Button'
import Container from 'components/elements/Container'
import { unstable_setRequestLocale } from 'next-intl/server'

const Logements = ({ params: { locale } }: { params: { locale: string } }) => {
  unstable_setRequestLocale(locale)

  const t = useTranslations('Delivery')
  const lang = useLocale()

  return (
    <Container>
      <Heading level={1} className='my-8 text-center'>
        {t('deliveryMainTitle')}
      </Heading>
      <div className='mb-8 flex flex-grow flex-col text-black dark:text-white'>
        <section className='mb-8 flex flex-grow flex-col items-center justify-center'>
          <Heading level={2}>{t('delivery')}</Heading>
          <p className='mb-8 mt-4 text-center'>{t('deliveryContent')}</p>
          <Link
            href='https://deliveroo.fr/fr/'
            target='_blank'
            rel='nofollow'
            tabIndex={-1}
          >
            <Button>{t('deliveryButton')}</Button>
          </Link>
        </section>
        <div className='my-12 flex flex-grow items-center justify-center font-semibold'>
          <span className='inline-block h-px w-24 bg-primary'></span>
          <span className='mx-4 uppercase'>{t('or')}</span>
          <span className='inline-block h-px w-24 bg-primary'></span>
        </div>
        <section className='mb-8 flex flex-grow flex-col items-center justify-center'>
          <Heading level={2}>{t('takeAway')}</Heading>
          <p className='mb-8 mt-4 text-center'>{t('takeAwayContent')}</p>
          <Link href={`/${lang}`} tabIndex={-1}>
            <Button>{t('takeAwayButton')}</Button>
          </Link>
        </section>
      </div>
    </Container>
  )
}

export default Logements