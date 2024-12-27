import { transformLocaleToCountry } from '@/utils/formats'
import { useLocale } from 'next-intl'
import { IconContainer } from '../../components/IconContainer'
import { LanguagesSwitcherFlag } from './LanguagesSwitcherFlag'

export const LanguageSwitcherButton = () => {
  const lang = useLocale()

  return (
    <>
      <IconContainer>
        <LanguagesSwitcherFlag locale={lang} />
      </IconContainer>
      <span>{transformLocaleToCountry(lang)}</span>
    </>
  )
}
