import { z } from 'zod'

export const HutDataSchema = z.object({
  price: z.coerce.number()
})
