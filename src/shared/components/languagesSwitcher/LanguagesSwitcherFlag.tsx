import { EnglishFlag } from '@/assets/svg/flags/EnglishFlag'
import { FrenchFlag } from '@/assets/svg/flags/FrenchFlag'

type LanguagesSwitcherFlagProps = {
  locale: string
}

export const LanguagesSwitcherFlag = ({
  locale
}: LanguagesSwitcherFlagProps) => {
  return locale === 'fr' ? <FrenchFlag /> : <EnglishFlag />
}
