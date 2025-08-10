import { z } from 'zod'

// z.coerce.date() convert automatically the string to a date
export const OpeningHoursSchema = z.object({
  mondayStart: z.coerce.date(),
  mondayEnd: z.coerce.date(),
  tuesdayStart: z.coerce.date(),
  tuesdayEnd: z.coerce.date(),
  wednesdayStart: z.coerce.date(),
  wednesdayEnd: z.coerce.date(),
  thursdayStart: z.coerce.date(),
  thursdayEnd: z.coerce.date(),
  fridayStart: z.coerce.date(),
  fridayEnd: z.coerce.date(),
  saturdayStart: z.coerce.date(),
  saturdayEnd: z.coerce.date(),
  sundayStart: z.coerce.date(),
  sundayEnd: z.coerce.date()
})

export const OpeningHoursFormSchema = z.object({
  mondayStart: z.string(),
  mondayEnd: z.string(),
  tuesdayStart: z.string(),
  tuesdayEnd: z.string(),
  wednesdayStart: z.string(),
  wednesdayEnd: z.string(),
  thursdayStart: z.string(),
  thursdayEnd: z.string(),
  fridayStart: z.string(),
  fridayEnd: z.string(),
  saturdayStart: z.string(),
  saturdayEnd: z.string(),
  sundayStart: z.string(),
  sundayEnd: z.string()
})
