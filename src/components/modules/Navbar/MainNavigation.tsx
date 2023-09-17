import { KeyboardEvent, useEffect } from 'react'
import Link from 'next/link'
import useTranslation from 'next-translate/useTranslation'
import { cn } from '@/utils/cn'
import { ChevronDown } from 'lucide-react'
import useToggle from '@/hooks/useToggle'
import NavItem from './NavItem'
import NavList from './NavList'

interface MainNavigationProps {
  isBurgerMenuOpen: boolean
  onCloseBurgerMenu: () => void
}

const MainNavigation = ({
  isBurgerMenuOpen,
  onCloseBurgerMenu
}: MainNavigationProps) => {
  const { t, lang } = useTranslation('common')

  const [isNestedListOpen, handleTogglePopup, setIsNestedListOpen] = useToggle()

  const handleClosePopup = () => {
    setIsNestedListOpen(false)
  }

  const handleKeyDown = (event: KeyboardEvent<HTMLSpanElement>) => {
    if (event.key === 'Enter') {
      handleTogglePopup()
    }
  }

  // Close accommodation list when burger menu is closed
  useEffect(() => {
    if (!isBurgerMenuOpen) {
      setIsNestedListOpen(false)
    }
  }, [isBurgerMenuOpen])

  return (
    <nav aria-labelledby='Main'>
      <NavList>
        <NavItem>
          <Link
            href={`/${lang}`}
            as={`/${lang}`}
            onClick={onCloseBurgerMenu}
            className='transition-colors hover:text-primary-hover'
          >
            {t('home')}
          </Link>
        </NavItem>
        <NavItem
          className={cn({
            'pb-0': isNestedListOpen
          })}
        >
          <div
            className={cn(
              'flex max-w-max cursor-pointer items-center gap-2 transition-colors hover:text-primary-hover',
              {
                'pb-4 lg:pb-0': isNestedListOpen
              }
            )}
            onClick={handleTogglePopup}
            onKeyDown={handleKeyDown}
            tabIndex={0}
          >
            {t('accommodations')}
            <ChevronDown
              className={cn('rotate-0 transition-transform', {
                'rotate-180': isNestedListOpen
              })}
            />
          </div>
          <NavList
            className={cn('hidden', {
              'flex flex-col lg:absolute lg:top-16 lg:rounded-lg lg:bg-primary-dark lg:p-4 lg:shadow-md':
                isNestedListOpen
            })}
          >
            <NavItem className='py-1 pl-5'>
              <Link
                href={`/${lang}/logements/yourte`}
                as={`/${lang}/logements/yourte`}
                className='flex max-w-max items-center gap-2 transition-colors hover:text-primary-hover'
                onClick={handleClosePopup}
              >
                Yourte
              </Link>
            </NavItem>
            <NavItem className='py-1 pl-5'>
              <Link
                href={`/${lang}/logements/cabane`}
                as={`/${lang}/logements/cabane`}
                className='flex max-w-max items-center gap-2 transition-colors hover:text-primary-hover'
                onClick={handleClosePopup}
              >
                Cabane
              </Link>
            </NavItem>
            <NavItem className='py-1 pl-5'>
              <Link
                href={`/${lang}/logements`}
                as={`/${lang}/logements`}
                className='flex max-w-max items-center gap-2 transition-colors hover:text-primary-hover'
                onClick={handleClosePopup}
              >
                Zone Tentes
              </Link>
            </NavItem>
            <NavItem className='py-1 pl-5'>
              <Link
                href={`/${lang}/logements`}
                as={`/${lang}/logements`}
                className='flex max-w-max items-center gap-2 transition-colors hover:text-primary-hover'
                onClick={handleClosePopup}
                onBlur={handleClosePopup}
              >
                Zone Camping-cars
              </Link>
            </NavItem>
          </NavList>
        </NavItem>
        <NavItem>
          <Link
            href={`/${lang}/contact`}
            as={`/${lang}/contact`}
            onClick={onCloseBurgerMenu}
            className='transition-colors hover:text-primary-hover'
          >
            {t('contact')}
          </Link>
        </NavItem>
        <NavItem>
          <Link
            href={`/${lang}/activites`}
            as={`/${lang}/activites`}
            onClick={onCloseBurgerMenu}
            className='transition-colors hover:text-primary-hover'
          >
            {t('activities')}
          </Link>
        </NavItem>
      </NavList>
    </nav>
  )
}
export default MainNavigation
