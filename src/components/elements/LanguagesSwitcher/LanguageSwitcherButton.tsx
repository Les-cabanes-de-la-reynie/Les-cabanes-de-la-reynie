import { transformLocaleToCountry } from '@/utils/formats'
import { Languages } from 'lucide-react'
import { useLocale } from 'next-intl'

const LanguageSwitcherButton = () => {
  const lang = useLocale()

  return (
    <>
      <Languages name='languages' size={18} className='mr-2' />
      <span>{transformLocaleToCountry(lang)}</span>
    </>
  )
}
export default LanguageSwitcherButton
