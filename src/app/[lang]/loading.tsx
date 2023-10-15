'use client'

import createTranslation from 'next-translate/createTranslation'
import Loader from '@/components/elements/Loader'

const Loading = () => {
  const { t } = createTranslation('common')
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
