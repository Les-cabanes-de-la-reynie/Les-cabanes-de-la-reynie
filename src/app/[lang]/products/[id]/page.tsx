import { getProduct } from '@/services/products'
import { Locale } from '../../../../../i18n.config'

export default async function ProductId({
  params: { lang, id }
}: {
  params: { lang: Locale; id: number }
}) {
  const { data } = await getProduct(id)
  const attributes = data?.attributes

  return (
    <>
      {attributes?.name}
      {attributes?.description}
    </>
  )
}
