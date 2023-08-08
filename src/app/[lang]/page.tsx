import { getDictionary } from '@/lib/dictionary'
import { Locale } from '../../../i18n.config'
import OurMenu from '@/components/modules/OurMenu'

export default async function Home({
  params: { lang }
}: {
  params: { lang: Locale }
}) {
  const { Home } = await getDictionary(lang)

  return (
    <>
      <OurMenu />
    </>
  )
}
