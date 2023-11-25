import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'
import { add, format, startOfDay } from 'date-fns'

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

export const formatStringTimeIntoDate = (time: string) => {
  const hours = parseInt(time.split(':')[0], 10)
  const minutes = parseInt(time.split(':')[1], 10)

  // Generate new date that start at midnight and add incoming time on it
  const completDate = add(startOfDay(new Date()), {
    hours: hours,
    minutes: minutes
  })

  return completDate
}

export const formatDateToTime = (incomingDate: Date) => {
  const dateWithoutTimeZone = new Date(incomingDate.toISOString().slice(0, -1))

  return format(dateWithoutTimeZone, 'HH:mm')
}
