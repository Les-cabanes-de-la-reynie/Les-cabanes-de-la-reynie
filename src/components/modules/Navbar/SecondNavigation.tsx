import LanguagesSwitcher from '@/components/elements/LanguagesSwitcher'
import NavItem from './NavItem'

interface SecondNavigationProps {
  handleCloseBurgerMenu: () => void
}

const SecondNavigation = ({ handleCloseBurgerMenu }: SecondNavigationProps) => {
  // TODO: use handleCloseBurgerMenu on the last item
  return (
    <nav
      aria-labelledby='Second'
      className='mt-4 border-t border-border pt-2 lg:mt-0 lg:border-none lg:pt-0'
    >
      <ul className='flex items-center gap-x-8 text-white'>
        <NavItem>
          <LanguagesSwitcher />
        </NavItem>
      </ul>
    </nav>
  )
}
export default SecondNavigation
