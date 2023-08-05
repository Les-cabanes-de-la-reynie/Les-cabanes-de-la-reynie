import { Locale } from '../../i18n.config'

export interface PagePropsParams {
  lang: Locale
  id: number
}

export interface PageProps {
  children: React.ReactNode
  params: PagePropsParams
}
