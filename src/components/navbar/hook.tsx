import { useTranslations } from 'next-intl'

export const useGetNavigationLinks = () => {
  const tCommon = useTranslations('Common')

  return {
    home: { label: tCommon('home'), url: '/' },
    accommodations: { label: tCommon('accommodations'), url: null },
    yurt: { label: tCommon('yurt'), url: '/logements/yourte' },
    hut: { label: tCommon('hut'), url: '/logements/cabane' },
    activities: { label: tCommon('activities'), url: '/activites' },
    contact: { label: tCommon('contact'), url: '/contact' }
  }
}
