import { getProduct } from '@/services/products'

export default async function ProductId({
  params: { id }
}: {
  params: { id: number }
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
