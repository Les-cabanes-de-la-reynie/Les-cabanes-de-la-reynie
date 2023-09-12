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
      className='flex select-none justify-center gap-1 rounded p-2 text-sm text-zinc-800 hover:bg-zinc-800 hover:text-white dark:text-white'
    >
      <Languages name='languages' size={18} />
      <span>{transformLocaleToCountry(lang)}</span>
    </Button>
  )
}
export default LanguageSwitcherButton
