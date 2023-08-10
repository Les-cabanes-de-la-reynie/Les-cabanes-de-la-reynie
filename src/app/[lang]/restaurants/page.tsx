import { getDictionary } from '@/lib/dictionary'
import { Locale } from '../../../../i18n.config'

export default async function Restaurants({
  params: { lang }
}: {
  params: { lang: Locale }
}) {
  const { Home } = await getDictionary(lang)

  return <>Restaurants !!</>
}
