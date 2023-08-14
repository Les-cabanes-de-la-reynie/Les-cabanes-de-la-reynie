import useTranslation from 'next-translate/useTranslation'
import { ProductEntity } from '@/_types/products'
import Heading from '../Heading'
import PriceTag from '../PriceTag'
import Quantity from '../Quantity'

const CardBody = ({ attributes }: Pick<ProductEntity, 'attributes'>) => {
  const { t } = useTranslation('product')

  return (
    <div className='flex flex-grow flex-col p-3'>
      <PriceTag price={attributes?.price} className='mb-1 w-full text-xl' />
      <Heading
        level={3}
        className='line-clamp-2 font-normal leading-5 md:leading-5'
      >
        {attributes?.name}
      </Heading>
      {attributes?.in_stock ? (
        <Quantity className='mt-auto' />
      ) : (
        <span className='mt-auto text-center text-2xl font-semibold text-error'>
          {t('outOfStock')}
        </span>
      )}
    </div>
  )
}
export default CardBody
