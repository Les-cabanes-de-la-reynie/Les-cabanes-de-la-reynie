import { z } from 'zod'

export const OpeningHoursSchema = z.object({
  mondayStart: z.date(),
  mondayEnd: z.date(),
  tuesdayStart: z.date(),
  tuesdayEnd: z.date(),
  wednesdayStart: z.date(),
  wednesdayEnd: z.date(),
  thursdayStart: z.date(),
  thursdayEnd: z.date(),
  fridayStart: z.date(),
  fridayEnd: z.date(),
  saturdayStart: z.date(),
  saturdayEnd: z.date(),
  sundayStart: z.date(),
  sundayEnd: z.date()
})
