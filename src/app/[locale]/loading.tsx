'use client'

import { useTranslations } from 'next-intl'
import Loader from '@/components/elements/Loader'
import P from '@/components/elements/P'

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
