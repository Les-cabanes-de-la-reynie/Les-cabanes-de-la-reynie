'use client'

import { useTranslations } from 'next-intl'
import Loader from '@/components/elements/Loader'

const Loading = () => {
  const t = useTranslations('Common')

  return (
    <div className='flex w-full items-center justify-center'>
      <p className='mr-2'>{t('loading')}</p>
      <div>
        <Loader />
      </div>
    </div>
  )
}

export default Loading
