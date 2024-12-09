'use client'

import { Loader } from '@/components/Loader'
import { P } from '@/components/P'
import { useTranslations } from 'next-intl'

const Loading = () => {
  const t = useTranslations('Common')

  return (
    <div className='flex w-full items-center justify-center'>
      <P className='mr-2'>{t('loading')}</P>
      <div>
        <Loader />
      </div>
    </div>
  )
}

export default Loading
