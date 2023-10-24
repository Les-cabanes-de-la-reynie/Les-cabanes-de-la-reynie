import { cn } from 'utils/cn'
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
        'invisible fixed left-0 right-0 top-[4.5rem] box-border flex h-[calc(100vh-4.5rem)] w-full -translate-x-[100vw] flex-col bg-primary-dark px-4 py-2 transition-transform duration-300 md:px-6 md:py-4 lg:visible lg:static lg:h-full lg:w-auto lg:flex-grow lg:translate-x-0 lg:translate-y-0 lg:flex-row lg:items-center lg:justify-between lg:bg-inherit lg:px-0 lg:py-0 lg:duration-0',
        {
          'visible translate-x-0 dark:bg-primary-dark': isBurgerMenuOpen
        }
      )}
    >
      <MainNavigation
        isBurgerMenuOpen={isBurgerMenuOpen}
        onCloseBurgerMenu={handleCloseBurgerMenu}
      />
      <SecondNavigation handleCloseBurgerMenu={handleCloseBurgerMenu} />
    </div>
  )
}
export default HeaderContent
