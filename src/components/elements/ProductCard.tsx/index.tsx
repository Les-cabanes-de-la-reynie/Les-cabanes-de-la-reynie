import Card from './Card'
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
    </Card>
  )
}
export default ProductCard
