import useTranslation from 'next-translate/useTranslation'
import { Product } from '@/_types/products'
import Heading from '@/components/elements/Heading'
import PriceTag from '@/components/elements/PriceTag'
import Quantity from '@/components/elements/Quantity'

interface ProductDetailsBodyProps {
  product: Product
}

const ProductDetailsBody = ({ product }: ProductDetailsBodyProps) => {
  const { t } = useTranslation('product')

  const { name, price, description, allergens, in_stock } = product

  return (
    <div className='flex flex-col lg:box-border lg:h-[40rem] lg:w-2/5 lg:py-4'>
      <Heading level={1}>{name}</Heading>
      <PriceTag
        price={price}
        className='mb-6 mt-4 text-3xl font-normal text-white lg:mb-8 lg:mt-8'
      />
      <section className='mb-8 text-stone-300'>
        <Heading level={2} className=''>
          {t('description')}
        </Heading>
        <div>{description}</div>
      </section>
      <section className='mb-8 text-stone-300'>
        <Heading level={2} className=''>
          {t('allergens')}
        </Heading>
        <p>
          {!!allergens && allergens?.length > 0 ? allergens : t('noAllergens')}
        </p>
      </section>

      {in_stock && (
        <Quantity className='mb-8 mt-4 w-full self-center lg:mb-0 lg:mt-auto lg:self-start' />
      )}
    </div>
  )
}
export default ProductDetailsBody
