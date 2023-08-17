import ProductDetailsWrapper from '@/components/modules/ProductDetails/ProductDetailsWrapper'

export default function ProductId({
  params: { id }
}: {
  params: { id: number }
}) {
  return <ProductDetailsWrapper productId={id} />
}
