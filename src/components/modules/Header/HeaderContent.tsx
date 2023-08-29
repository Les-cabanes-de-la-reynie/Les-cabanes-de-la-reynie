import { cn } from '@/utils/cn'
import MainNavigation from '../Navbar/MainNavigation'
import SecondNavigation from '../Navbar/SecondNavigation'

interface HeaderContentProps {
  isBurgerMenuOpen: boolean
  handleCloseBurgerMenu: () => void
}

const HeaderContent = ({
  isBurgerMenuOpen,
  handleCloseBurgerMenu
}: HeaderContentProps) => {
  return (
    <div
      className={cn(
        'invisible fixed left-0 right-0 top-[4.5rem] flex h-[calc(100vh-4.5rem)] w-full -translate-x-[100vw] flex-col bg-stone-950 transition-transform duration-300 lg:visible lg:static lg:h-auto lg:w-auto lg:flex-grow lg:translate-x-0 lg:flex-row lg:justify-between lg:duration-0',
        {
          'visible translate-x-0': isBurgerMenuOpen
        }
      )}
    >
      <MainNavigation onCloseBurgerMenu={handleCloseBurgerMenu} />
      <SecondNavigation handleCloseBurgerMenu={handleCloseBurgerMenu} />
    </div>
  )
}
export default HeaderContent
