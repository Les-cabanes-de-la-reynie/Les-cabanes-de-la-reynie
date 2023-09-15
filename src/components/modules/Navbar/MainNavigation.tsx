import Link from 'next/link'
import useTranslation from 'next-translate/useTranslation'
import NavItem from './NavItem'
import NavList from './NavList'

interface MainNavigationProps {
  onCloseBurgerMenu: () => void
}

const MainNavigation = ({ onCloseBurgerMenu }: MainNavigationProps) => {
  const { t, lang } = useTranslation('common')

  return (
    <nav aria-labelledby='Main'>
      <NavList>
        <NavItem>
          <Link href={`/${lang}`} as={`/${lang}`} onClick={onCloseBurgerMenu}>
            {t('home')}
          </Link>
        </NavItem>
        <NavItem>
          <Link
            href={`/${lang}/accommodations`}
            as={`/${lang}/accommodations`}
            onClick={onCloseBurgerMenu}
          >
            {t('accommodations')}
          </Link>
        </NavItem>
        <NavItem>
          <Link
            href={`/${lang}/contact`}
            as={`/${lang}/contact`}
            onClick={onCloseBurgerMenu}
          >
            {t('contact')}
          </Link>
        </NavItem>
        <NavItem>
          <Link
            href={`/${lang}/activities`}
            as={`/${lang}/activities`}
            onClick={onCloseBurgerMenu}
          >
            {t('activities')}
          </Link>
        </NavItem>
      </NavList>
    </nav>
  )
}
export default MainNavigation
