import natureImage from '@/assets/svg/nature.svg'
import { Container } from '@/components/Container'
import { Heading } from '@/components/Heading'
import { P } from '@/components/P'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import Link from 'next/link'

export const IntroduceLesCabanesDeLaReynie = () => {
  const t = useTranslations('Home')

  return (
    <Container>
      <div className='w-full'>
        <Link
          href='https://storyset.com/nature'
          aria-label='Nature illustrations by Storyset'
          target='_blank'
          rel='noopener noreferrer'
        >
          <Image
            src={natureImage}
            alt='Nature illustrations by Storyset'
            height={256}
            width={256}
            className='float-right hidden h-64 w-64 cursor-default xs:block'
          />
        </Link>

        <div className='block h-full'>
          <Heading level={2}>{t('aboutUsTitle')}</Heading>
          <P>{t('aboutUsP1')}</P>
          <P>{t('aboutUsP2')}</P>
          <P>{t('aboutUsP3')}</P>
          <P>{t('aboutUsP4')}</P>
        </div>
      </div>
    </Container>
  )
}
