'use client'

import { Container } from '@/components/Container'
import { Loader } from '@/components/Loader'
import { P } from '@/components/P'
import { useTranslations } from 'next-intl'

const Loading = () => {
  const t = useTranslations('Common')

  return (
    <Container center>
      <div className='flex items-center gap-2'>
        <P className='mr-2'>{t('loading')}</P>
        <div>
          <Loader />
        </div>
      </div>
    </Container>
  )
}

export default Loading
