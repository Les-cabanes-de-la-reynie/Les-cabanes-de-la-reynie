import { IconContainer } from '@/shared/components/IconContainer'
import { transformLocaleToCountry } from '@/shared/utils/formats'
import { useLocale } from 'next-intl'
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
