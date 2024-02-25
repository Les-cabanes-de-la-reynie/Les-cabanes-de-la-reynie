import { OpeningHoursData } from '@/components/modules/OpeningHours/types'
import { formatStringTimeIntoDate } from './date'

export const formatLocaleToCountry = (locale: string) =>
  locale === 'fr' ? 'Français' : 'English'

export const formatFormDataIntoOpeningHoursData = (formData: FormData) => {
  const allFormData = Array.from(formData) as [[keyof OpeningHoursData, string]]

  const openingHoursData = allFormData.reduce((acc, curr) => {
    const [key, value] = curr

    acc[key] = formatStringTimeIntoDate(value)

    return acc
  }, {} as OpeningHoursData)

  return openingHoursData
}
