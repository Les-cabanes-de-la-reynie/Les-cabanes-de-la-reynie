import { Product } from '@/_types/products'

const CardDisabled = ({ in_stock }: Pick<Product, 'in_stock'>) => {
  return (
    !in_stock && (
      <div className='absolute inset-0 flex h-full w-full cursor-not-allowed select-none items-center justify-center bg-black bg-opacity-90'>
        <span className='text-center text-2xl font-semibold text-error'>
          OUT OF STOCK
        </span>
      </div>
    )
  )
}
export default CardDisabled
