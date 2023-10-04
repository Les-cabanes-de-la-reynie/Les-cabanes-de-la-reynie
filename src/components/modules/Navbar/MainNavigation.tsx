import { KeyboardEvent, useEffect, useRef } from 'react'
import Link from 'next/link'
import createTranslation from 'next-translate/createTranslation'
import { cn } from '@/utils/cn'
import { ChevronDown } from 'lucide-react'
import useToggle from '@/hooks/useToggle'
import NavItem from './NavItem'
import NavList from './NavList'
import useOutsideClick from '@/hooks/useOutsideClick'

interface MainNavigationProps {
  isBurgerMenuOpen: boolean
  onCloseBurgerMenu: () => void
}

const MainNavigation = ({
  isBurgerMenuOpen,
  onCloseBurgerMenu
}: MainNavigationProps) => {
  const { t, lang } = createTranslation('common')

  const popupRef = useRef(null as unknown as HTMLUListElement)
  const [isNestedListOpen, handleToggleNestedList, setIsNestedListOpen] =
    useToggle()

  const handleClosePopup = () => {
    setIsNestedListOpen(false)
  }

  const handleClickOutside = () => {
    if (isNestedListOpen) {
      setIsNestedListOpen(false)
    }
  }

  useOutsideClick(popupRef, handleClickOutside)

  const handleKeyDown = (event: KeyboardEvent<HTMLSpanElement>) => {
    if (event.key === 'Enter') {
      handleToggleNestedList()
    }
  }

  // Close accommodation list when burger menu is closed
  useEffect(() => {
    if (!isBurgerMenuOpen) {
      setIsNestedListOpen(false)
    }
  }, [isBurgerMenuOpen, setIsNestedListOpen])

  return (
    <nav aria-labelledby='Main'>
      <NavList>
        <NavItem>
          <Link
            href={`/${lang}`}
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
          onClick={handleToggleNestedList}
          onKeyDown={handleKeyDown}
          tabIndex={0}
        >
          <div
            className={cn(
              'flex max-w-max cursor-pointer items-center gap-2 transition-colors hover:text-primary-hover',
              {
                'pb-4 lg:pb-0': isNestedListOpen
              }
            )}
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
              'flex flex-col lg:absolute lg:top-11 lg:rounded-lg lg:bg-primary-dark lg:p-2 lg:shadow-md':
                isNestedListOpen
            })}
            ref={popupRef}
          >
            <NavItem className='py-1 pl-5'>
              <Link
                href={`/${lang}/logements/yourte`}
                className='flex max-w-max items-center gap-2 transition-colors hover:text-primary-hover lg:rounded-lg lg:p-2 lg:hover:bg-primary-hover lg:hover:text-white'
                onClick={handleClosePopup}
              >
                Yourte
              </Link>
            </NavItem>
            <NavItem className='py-1 pl-5'>
              <Link
                href={`/${lang}/logements/cabane`}
                className='flex max-w-max items-center gap-2 transition-colors hover:text-primary-hover lg:rounded-lg lg:p-2 lg:hover:bg-primary-hover lg:hover:text-white'
                onClick={handleClosePopup}
              >
                Cabane
              </Link>
            </NavItem>
            <NavItem className='py-1 pl-5'>
              <Link
                href={`/${lang}/logements`}
                className='flex max-w-max items-center gap-2 transition-colors hover:text-primary-hover lg:rounded-lg lg:p-2 lg:hover:bg-primary-hover lg:hover:text-white'
                onClick={handleClosePopup}
              >
                Zone Tentes
              </Link>
            </NavItem>
            <NavItem className='py-1 pl-5'>
              <Link
                href={`/${lang}/logements`}
                className='flex max-w-max items-center gap-2 transition-colors hover:text-primary-hover lg:rounded-lg lg:p-2 lg:hover:bg-primary-hover lg:hover:text-white'
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
            onClick={onCloseBurgerMenu}
            className='transition-colors hover:text-primary-hover'
          >
            {t('contact')}
          </Link>
        </NavItem>
        <NavItem>
          <Link
            href={`/${lang}/activites`}
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
