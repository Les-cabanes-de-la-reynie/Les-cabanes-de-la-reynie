'use client'

import createTranslation from 'next-translate/createTranslation'
import Loader from '@/components/elements/Loader'

export default function Loading() {
  const { t } = createTranslation('common')
  return (
    <p>
      {t('loading')} <Loader />
    </p>
  )
}
