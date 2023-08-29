import { Languages } from 'lucide-react'
import { transformLocaleToCountry } from '@/utils/transformLocaleToCountry'
import Button from '../Button'
import useTranslation from 'next-translate/useTranslation'

interface LanguageSwitcherButtonProps {
  isLocaleListOpen: boolean
  onTogglePopup: () => void
}

const LanguageSwitcherButton = ({
  isLocaleListOpen,
  onTogglePopup
}: LanguageSwitcherButtonProps) => {
  const { lang } = useTranslation('home')

  return (
    <Button
      onClick={onTogglePopup}
      kind='headless'
      aria-haspopup='menu'
      aria-expanded={isLocaleListOpen}
      className='flex select-none justify-center gap-1 rounded px-2 py-1 text-sm text-white hover:bg-stone-800'
    >
      <Languages name='languages' size={18} />
      {transformLocaleToCountry(lang)}
    </Button>
  )
}
export default LanguageSwitcherButton
