import { z } from 'zod'

export const YurtDataSchema = z.object({
  price: z.coerce.number()
})
