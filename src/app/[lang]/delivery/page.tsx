import { getDictionary } from '@/lib/dictionary'
import { Locale } from '../../../../i18n.config'

export default async function Delivery({
  params: { lang }
}: {
  params: { lang: Locale }
}) {
  const { Home } = await getDictionary(lang)

  return <>Delivery !!</>
}
