import { Link } from '@/i18n/navigation'
import { PAGE_ROUTES } from '@/shared/_constants/page'
import { useTranslations } from 'next-intl'
import { ComponentProps } from 'react'

type Href = ComponentProps<typeof Link>['href']

type NavigationLinkWithUrl = {
  label: string
  description: string | null
  url: Href
}

type NavigationLinkWithoutUrl = {
  label: string
  description: string | null
  url?: undefined
}

export type NavigationLinks = {
  home: NavigationLinkWithUrl
  accommodations: NavigationLinkWithoutUrl
  yurt: NavigationLinkWithUrl
  cabin: NavigationLinkWithUrl
  activities: NavigationLinkWithUrl
  contact: NavigationLinkWithUrl
}

export const useGetNavigationLinks = (): NavigationLinks => {
  const tCommon = useTranslations('Common')
  const tYurt = useTranslations('Yurt')
  const tCabin = useTranslations('Cabin')

  return {
    home: { label: tCommon('home'), description: null, url: PAGE_ROUTES.home },
    accommodations: {
      label: tCommon('accommodations'),
      description: null
    },
    yurt: {
      label: tCommon('yurt'),
      description: tYurt('yurtP1'),
      url: PAGE_ROUTES.accommodation.yurt
    },
    cabin: {
      label: tCommon('cabin'),
      description: tCabin('cabinP1'),
      url: PAGE_ROUTES.accommodation.cabin
    },
    activities: {
      label: tCommon('activities'),
      description: null,
      url: PAGE_ROUTES.activity.home
    },
    contact: {
      label: tCommon('contact'),
      description: null,
      url: PAGE_ROUTES.contact
    }
  }
}
