import clsx from 'clsx'
import ProductCategories from './ProductCategories'
import { ClassNameProps } from '@/_types/components'
import AsideProductCategories from './AsideProductCategories'

interface OurMenuProps extends ClassNameProps {}

const OurMenu = ({ className }: OurMenuProps) => {
  return (
    <div
      className={clsx(
        className,
        'flex flex-col-reverse items-center justify-center lg:flex-row lg:items-start'
      )}
      data-test='ourMenu'
    >
      <AsideProductCategories />
      <ProductCategories />
    </div>
  )
}
export default OurMenu
