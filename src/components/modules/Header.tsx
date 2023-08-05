import Link from 'next/link'
import { Locale } from '../../../i18n.config'
import LocaleSwitcher from '../elements/LocaleSwitcher'
import { getDictionary } from '@/lib/dictionary'

const Header = async ({ lang }: { lang: Locale }) => {
  const { Navigation } = await getDictionary(lang)

  return (
    <header className='py-6'>
      <nav className='container flex items-center justify-between'>
        <ul className='flex gap-x-8'>
          <li>
            <Link href={`/${lang}`}>{Navigation.menu}</Link>
          </li>
          <li>
            <Link href={`/${lang}/about`}>{Navigation.restaurants}</Link>
          </li>
        </ul>
        <LocaleSwitcher />
      </nav>
    </header>
  )
}

export default Header
