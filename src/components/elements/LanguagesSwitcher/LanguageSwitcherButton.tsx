import { usePathname } from 'next/navigation'
import { Languages } from 'lucide-react'
import { Locale } from '../../../../i18n.config'
import { transformLocaleToCountry } from '@/utils/transformLocaleToCountry'
import Button from '../Button'

interface LanguageSwitcherButtonProps {
  isLocaleListOpen: boolean
  handleToggleMenu: () => void
}

const LanguageSwitcherButton = ({
  isLocaleListOpen,
  handleToggleMenu
}: LanguageSwitcherButtonProps) => {
  const pathName = usePathname()
  const segments = pathName.split('/')
  const locale = segments[1] as Locale

  return (
    <Button
      onClick={handleToggleMenu}
      kind='headless'
      aria-haspopup='menu'
      aria-expanded={isLocaleListOpen}
      className='flex select-none justify-center gap-1 rounded px-2 py-1 text-sm text-white hover:bg-stone-600'
    >
      <Languages name='languages' size={18} />
      {transformLocaleToCountry(locale)}
    </Button>
  )
}
export default LanguageSwitcherButton
