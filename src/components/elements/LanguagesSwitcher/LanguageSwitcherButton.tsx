import { useLocale } from 'next-intl'
import { Languages } from 'lucide-react'
import { transformLocaleToCountry } from 'utils/transformLocaleToCountry'
import Button from '../Button'

interface LanguageSwitcherButtonProps {
  isLocaleListOpen: boolean
  onTogglePopup: () => void
}

const LanguageSwitcherButton = ({
  isLocaleListOpen,
  onTogglePopup
}: LanguageSwitcherButtonProps) => {
  const lang = useLocale()

  return (
    <Button
      onClick={onTogglePopup}
      kind='headless'
      aria-haspopup='menu'
      aria-expanded={isLocaleListOpen}
      className='flex select-none justify-center gap-1 rounded p-2 text-sm text-white hover:bg-primary-hover'
    >
      <Languages name='languages' size={18} />
      <span>{transformLocaleToCountry(lang)}</span>
    </Button>
  )
}
export default LanguageSwitcherButton
