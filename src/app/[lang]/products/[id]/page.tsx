import { getProduct } from '@/services/products'
import { PageProps } from '@/_types/misc'

export default async function ProductId({ params: { lang, id } }: PageProps) {
  const { data } = await getProduct(id)
  const attributes = data?.attributes

  return (
    <>
      {attributes?.name}
      {attributes?.description}
    </>
  )
}
