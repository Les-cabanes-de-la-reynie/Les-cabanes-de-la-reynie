import { EnglishFlag } from '@/assets/icons/flags/EnglishFlag'
import { FrenchFlag } from '@/assets/icons/flags/FrenchFlag'

type LanguagesSwitcherFlagProps = {
  locale: string
}

export const LanguagesSwitcherFlag = ({
  locale
}: LanguagesSwitcherFlagProps) => {
  return locale === 'fr' ? <FrenchFlag /> : <EnglishFlag />
}
