import Card from './Card'
import CardDisabled from './CardDisabled'
import CardHeader from './CardHeader'
import CardBody from './CardBody'
import { ProductEntity } from '@/_types/products'

interface ProductCardProps {
  product: ProductEntity
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { attributes } = product

  return (
    <Card>
      <CardHeader product={product} />
      <CardBody attributes={attributes} />
      <CardDisabled in_stock={attributes?.in_stock} />
    </Card>
  )
}
export default ProductCard
