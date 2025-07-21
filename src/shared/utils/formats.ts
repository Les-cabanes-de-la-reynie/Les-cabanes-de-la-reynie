import { OpeningHoursData } from '@/features/openingHours/_types'
import { convertTimeIntoDate } from './date'

export const transformLocaleToCountry = (locale: string) =>
  locale === 'fr' ? 'Français' : 'English'

export const formatFormDataIntoOpeningHoursData = (formData: FormData) => {
  const allFormData = Array.from(formData) as [[keyof OpeningHoursData, string]]

  const openingHoursData = allFormData.reduce((acc, curr) => {
    const [key, value] = curr

    acc[key] = convertTimeIntoDate(value)

    return acc
  }, {} as OpeningHoursData)

  return openingHoursData
}

export const formatPhoneNumber = (phoneNumber: string) => {
  return phoneNumber.replace(/\B(?=(\d{2})+(?!\d))(?<!\+3)|\B(?<=\+33)/g, ' ')
}
