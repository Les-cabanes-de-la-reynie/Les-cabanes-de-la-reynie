import Link from 'next/link'
import Heading from '../Heading'
import Card from '../ProductCard.tsx/Card'

interface CategoryCardProps {
  category: string
  title: string
}

const CategoryCard = ({ category, title }: CategoryCardProps) => {
  return (
    <Link href={`/products/category/${category}`}>
      <Card>
        <Heading level={4}>{title}</Heading>
      </Card>
    </Link>
  )
}
export default CategoryCard
