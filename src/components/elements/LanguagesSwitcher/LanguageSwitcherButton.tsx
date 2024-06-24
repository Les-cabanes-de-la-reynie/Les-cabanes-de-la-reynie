import { transformLocaleToCountry } from '@/utils/formats'
import { Languages } from 'lucide-react'
import { useLocale } from 'next-intl'
import { APP_ICON_SIZE_CLASSNAME } from '../../../_constants/className'
import { IconContainer } from '../IconContainer'

const LanguageSwitcherButton = () => {
  const lang = useLocale()

  return (
    <>
      <IconContainer className='ml-0'>
        <Languages name='languages' className={APP_ICON_SIZE_CLASSNAME} />
      </IconContainer>
      <span>{transformLocaleToCountry(lang)}</span>
    </>
  )
}
export default LanguageSwitcherButton
