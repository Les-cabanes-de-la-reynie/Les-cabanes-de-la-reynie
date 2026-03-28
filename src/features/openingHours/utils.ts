import { convertTimeIntoISOString } from '@/shared/utils/date'
import { OpeningHoursFormData } from './_types'

export const convertFormDataTimeIntoISOString = (
  formData: OpeningHoursFormData
) => {
  return {
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
}
