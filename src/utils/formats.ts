import { OpeningHoursData } from '@/components/modules/OpeningHours/types'
import { convertTimeIntoDate } from './date'

export const transformLocaleToCountry = (locale: string) =>
  locale === 'fr' ? 'Français' : 'English'

// Sur Windows les navigateurs basés sur chromium (Edge compris) n'affichent pas les drapeaux car la police du système (Sego UI) ne supporte pas les emojis drapeau.
// Intéressant quand ça sera FIXE
export const isoToEmoji = (code: string) =>
  code
    .split('')
    .map(letter => (letter.charCodeAt(0) % 32) + 0x1f1e5)
    .map(emojiCode => String.fromCodePoint(emojiCode))
    .join('')

export const formatFormDataIntoOpeningHoursData = (formData: FormData) => {
  const allFormData = Array.from(formData) as [[keyof OpeningHoursData, string]]

  const openingHoursData = allFormData.reduce((acc, curr) => {
    const [key, value] = curr

    acc[key] = convertTimeIntoDate(value)

    return acc
  }, {} as OpeningHoursData)

  return openingHoursData
}
