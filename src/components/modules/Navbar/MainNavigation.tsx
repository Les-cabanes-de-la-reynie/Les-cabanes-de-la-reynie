import Link from 'next/link'
import useTranslation from 'next-translate/useTranslation'
import { cn } from '@/utils/cn'
import { ChevronDown } from 'lucide-react'
import useToggle from '@/hooks/useToggle'
import NavItem from './NavItem'
import NavList from './NavList'

interface MainNavigationProps {
  onCloseBurgerMenu: () => void
}

const MainNavigation = ({ onCloseBurgerMenu }: MainNavigationProps) => {
  const { t, lang } = useTranslation('common')

  const [isNestedListOpen, handleTogglePopup, setIsNestedListOpen] = useToggle()

  const onClosePopup = () => {
    setIsNestedListOpen(false)
  }

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
            className='flex max-w-max items-center gap-2'
            onClick={handleTogglePopup}
          >
            {t('accommodations')}
            <ChevronDown
              className={cn('rotate-0 transition-transform', {
                'rotate-180': isNestedListOpen
              })}
            />
          </Link>
          <NavList
            className={cn('hidden', {
              'flex flex-col lg:absolute lg:top-[4.5rem] lg:bg-red-300':
                isNestedListOpen
            })}
          >
            <NavItem className='ml-5 pb-0'>
              <Link
                href={`/${lang}/accommodations`}
                as={`/${lang}/accommodations`}
                className='flex max-w-max items-center gap-2'
                onClick={onClosePopup}
              >
                Item 1
              </Link>
            </NavItem>
            <NavItem className='ml-5 p-0'>
              <Link
                href={`/${lang}/accommodations`}
                as={`/${lang}/accommodations`}
                className='flex max-w-max items-center gap-2'
                onClick={onClosePopup}
              >
                Item 2
              </Link>
            </NavItem>
            <NavItem className='ml-5 p-0'>
              <Link
                href={`/${lang}/accommodations`}
                as={`/${lang}/accommodations`}
                className='flex max-w-max items-center gap-2'
                onClick={onClosePopup}
                onBlur={onClosePopup}
              >
                Item 3
              </Link>
            </NavItem>
          </NavList>
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
