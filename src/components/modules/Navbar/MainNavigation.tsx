import Link from 'next/link'
import useTranslation from 'next-translate/useTranslation'
import NavItem from './NavItem'

interface MainNavigationProps {
  onCloseBurgerMenu: () => void
}

const MainNavigation = ({ onCloseBurgerMenu }: MainNavigationProps) => {
  const { t, lang } = useTranslation('navigation')

  return (
    <nav aria-labelledby='Main'>
      <ul className='flex flex-col gap-x-8 text-lg text-white lg:flex-row lg:items-center'>
        <NavItem>
          <Link href={`/${lang}`} as={`/${lang}`} onClick={onCloseBurgerMenu}>
            {t('menu')}
          </Link>
        </NavItem>
        <NavItem>
          <Link
            href={`/${lang}/restaurants`}
            as={`/${lang}/restaurants`}
            onClick={onCloseBurgerMenu}
          >
            {t('restaurants')}
          </Link>
        </NavItem>
        <NavItem>
          <Link
            href={`/${lang}/delivery`}
            as={`/${lang}/delivery`}
            onClick={onCloseBurgerMenu}
          >
            {t('delivery')}
          </Link>
        </NavItem>
      </ul>
    </nav>
  )
}
export default MainNavigation
