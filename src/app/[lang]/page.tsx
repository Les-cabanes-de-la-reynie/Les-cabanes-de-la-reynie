import { Locale } from '../../../i18n.config'
import OurMenu from '@/components/modules/OurMenu'

export default async function Home({
  params: { lang }
}: {
  params: { lang: Locale }
}) {
  return (
    <>
      <OurMenu lang={lang} />
    </>
  )
}
