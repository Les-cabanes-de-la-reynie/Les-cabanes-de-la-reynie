import { Locale } from '../../i18n.config'
export interface PageProps {
  children: React.ReactNode
  params: PagePropsParams
}
export interface LocaleLangProps {
  lang: Locale
}

export interface PagePropsParams extends LocaleLangProps {
  id: number
}
