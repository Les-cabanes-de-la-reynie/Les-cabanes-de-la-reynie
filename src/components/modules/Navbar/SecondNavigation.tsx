import LanguagesSwitcher from '@/components/elements/LanguagesSwitcher'
import NavItem from './NavItem'
import { ThemeSwitcher } from '@/components/elements/ThemeSwitcher'
import NavList from './NavList'

interface SecondNavigationProps {
  handleCloseBurgerMenu: () => void
}

const SecondNavigation = ({ handleCloseBurgerMenu }: SecondNavigationProps) => {
  return (
    <nav
      aria-labelledby='Second'
      className='mt-4 border-t border-primary-foreground pt-2 lg:mt-0 lg:border-none lg:pt-0'
    >
      <NavList>
        <NavItem>
          <LanguagesSwitcher />
        </NavItem>
        <NavItem>
          <ThemeSwitcher handleCloseBurgerMenu={handleCloseBurgerMenu} />
        </NavItem>
      </NavList>
    </nav>
  )
}
export default SecondNavigation
