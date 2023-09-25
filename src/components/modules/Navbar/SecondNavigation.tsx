import LanguagesSwitcher from '@/components/elements/LanguagesSwitcher'
import NavItem from './NavItem'
import { ThemeSwitcher } from '@/components/elements/ThemeSwitcher'
import NavList from './NavList'

interface SecondNavigationProps {
  handleCloseBurgerMenu: () => void
}

const SecondNavigation = ({ handleCloseBurgerMenu }: SecondNavigationProps) => {
  // TODO: use handleCloseBurgerMenu on the last item
  return (
    <nav
      aria-labelledby='Second'
      className='mt-4 border-t border-zinc-200 pt-2 lg:mt-0 lg:border-none lg:pt-0'
    >
      <NavList>
        <NavItem>
          <LanguagesSwitcher />
        </NavItem>
        <NavItem>
          <ThemeSwitcher />
        </NavItem>
      </NavList>
    </nav>
  )
}
export default SecondNavigation
