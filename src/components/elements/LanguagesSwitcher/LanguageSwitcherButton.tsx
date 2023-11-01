import { useLocale } from 'next-intl'
import { Languages } from 'lucide-react'
import { transformLocaleToCountry } from '@/lib/utils'

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
