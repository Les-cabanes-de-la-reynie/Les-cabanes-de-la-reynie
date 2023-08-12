import { getDictionary } from '@/lib/dictionary'
import { Locale } from '../../../../i18n.config'
import Heading from '@/components/elements/Heading'
import Link from 'next/link'
import Button from '@/components/elements/Button'

export default async function Delivery({
  params: { lang }
}: {
  params: { lang: Locale }
}) {
  const { Delivery } = await getDictionary(lang)

  return (
    <div className='container mb-8 w-full'>
      <Heading level={1} className='my-8 text-center'>
        {Delivery.deliveryMainTitle}
      </Heading>
      <div className='mb-8 flex flex-grow flex-col'>
        <section className='mb-8 flex flex-grow flex-col items-center justify-center'>
          <Heading level={2}>{Delivery.delivery}</Heading>
          <p className='my-8 text-center'>{Delivery.deliveryContent}</p>
          <Link
            href='https://deliveroo.fr/fr/'
            target='_blank'
            rel='nofollow'
            tabIndex={-1}
          >
            <Button>{Delivery.deliveryButton}</Button>
          </Link>
        </section>
        <div className='my-12 flex flex-grow items-center justify-center font-semibold'>
          <span className='inline-block h-px w-24 bg-primary'></span>
          <span className='mx-4 uppercase text-white'>{Delivery.or}</span>
          <span className='inline-block h-px w-24 bg-primary'></span>
        </div>
        <section className='mb-8 flex flex-grow flex-col items-center justify-center'>
          <Heading level={2}>{Delivery.takeAway}</Heading>
          <p className='my-8 text-center'>{Delivery.takeAwayContent}</p>
          <Link href='/' tabIndex={-1}>
            <Button>{Delivery.takeAwayButton}</Button>
          </Link>
        </section>
      </div>
    </div>
  )
}
