import LanguagesSwitcher from '@/components/elements/LanguagesSwitcher'

interface SecondNavigationProps {
  handleCloseBurgerMenu: () => void
}

const SecondNavigation = ({ handleCloseBurgerMenu }: SecondNavigationProps) => {
  // TODO: use handleCloseBurgerMenu on the last item
  return (
    <nav aria-labelledby='Second'>
      <ul className='flex items-center gap-x-8 text-white'>
        <li>
          <LanguagesSwitcher />
        </li>
      </ul>
    </nav>
  )
}
export default SecondNavigation
