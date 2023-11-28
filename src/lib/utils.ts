import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'
import { format } from 'date-fns'

export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs))
}

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

export const formatStringTimeIntoDate = (time: string) =>
  new Date(`2023-11-27T${time}:00.000Z`)

export const convertDateWithoutTimeZone = (incomingDate: Date) =>
  new Date(incomingDate.toISOString().slice(0, -1))

export const formatDateToTime = (incomingDate: Date) => {
  const dateWithoutTimeZone = convertDateWithoutTimeZone(incomingDate)

  return format(dateWithoutTimeZone, 'HH:mm')
}
