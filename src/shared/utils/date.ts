import { OpeningHoursFormData } from '@/features/openingHours/_types'
import { format, parse } from 'date-fns'

export const convertDateToTime = (incomingDate: Date) => {
  return format(incomingDate, 'HH:mm')
}

export const convertTimeIntoISOString = (time: string) => {
  return parse(time, 'HH:mm', new Date()).toISOString()
}
export const convertFormDataTimeIntoISOString = (
  formData: OpeningHoursFormData
) => {
  const openingHours = {
    mondayStart: convertTimeIntoISOString(formData.mondayStart),
    mondayEnd: convertTimeIntoISOString(formData.mondayEnd),
    tuesdayStart: convertTimeIntoISOString(formData.tuesdayStart),
    tuesdayEnd: convertTimeIntoISOString(formData.tuesdayEnd),
    wednesdayStart: convertTimeIntoISOString(formData.wednesdayStart),
    wednesdayEnd: convertTimeIntoISOString(formData.wednesdayEnd),
    thursdayStart: convertTimeIntoISOString(formData.thursdayStart),
    thursdayEnd: convertTimeIntoISOString(formData.thursdayEnd),
    fridayStart: convertTimeIntoISOString(formData.fridayStart),
    fridayEnd: convertTimeIntoISOString(formData.fridayEnd),
    saturdayStart: convertTimeIntoISOString(formData.saturdayStart),
    saturdayEnd: convertTimeIntoISOString(formData.saturdayEnd),
    sundayStart: convertTimeIntoISOString(formData.sundayStart),
    sundayEnd: convertTimeIntoISOString(formData.sundayEnd)
  }

  return openingHours
}
