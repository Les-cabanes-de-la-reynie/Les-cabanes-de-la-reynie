import { OpeningHoursData } from '@/features/openingHours/types'
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
