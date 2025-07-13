'use client'

import { Address as AddressType } from '@/shared/_types/address'
import { Heading } from '@/shared/components/Heading'
import { Loader } from '@/shared/components/Loader'
import { useTranslations } from 'next-intl'
import dynamic from 'next/dynamic'

type MapSectionProps = {
  address: AddressType
}

export const MapSection = ({ address }: MapSectionProps) => {
  const t = useTranslations('Contact')

  const MapWithNoSSR = dynamic(
    () => import('@/features/map/Map').then(mod => mod.Map),
    {
      loading: () => <Loader />,
      ssr: false
    }
  )

  return (
    <section className='flex w-full flex-col gap-4 lg:mb-0'>
      <Heading level={2}>{t('location')}</Heading>

      <MapWithNoSSR address={address} />
    </section>
  )
}
