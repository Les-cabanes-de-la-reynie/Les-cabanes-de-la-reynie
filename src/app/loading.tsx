'use client'

import { Container } from '@/shared/components/Container'
import { Loader } from '@/shared/components/Loader'
import { P } from '@/shared/components/P'
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
