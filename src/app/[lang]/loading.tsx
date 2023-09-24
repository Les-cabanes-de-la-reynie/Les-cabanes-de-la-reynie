'use client'

import useTranslation from 'next-translate/useTranslation'
import Loader from '@/components/elements/Loader'

export default function Loading() {
  const { t } = useTranslation('common')
  return (
    <p>
      {t('loading')} <Loader />
    </p>
  )
}
