import { PAGE_ROUTES } from '@/shared/_constants/page'
import { useTranslations } from 'next-intl'

type NavigationLink = {
  label: string
  description: string | null
  url: string
}

export type NavigationLinks = {
  home: NavigationLink
  accommodations: NavigationLink
  yurt: NavigationLink
  cabin: NavigationLink
  activities: NavigationLink
  contact: NavigationLink
}

export const useGetNavigationLinks = (): NavigationLinks => {
  const tCommon = useTranslations('Common')
  const tYurt = useTranslations('Yurt')
  const tCabin = useTranslations('Cabin')

  return {
    home: { label: tCommon('home'), description: null, url: PAGE_ROUTES.home },
    accommodations: {
      label: tCommon('accommodations'),
      description: null,
      url: ''
    },
    yurt: {
      label: tCommon('yurt'),
      description: tYurt('yurtP1'),
      url: '/logements/yourte'
    },
    cabin: {
      label: tCommon('cabin'),
      description: tCabin('cabinP1'),
      url: '/logements/cabane'
    },
    activities: {
      label: tCommon('activities'),
      description: null,
      url: '/activites'
    },
    contact: { label: tCommon('contact'), description: null, url: '/contact' }
  }
}
