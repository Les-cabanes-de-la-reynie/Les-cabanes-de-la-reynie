import { z } from 'zod'

export const CabinSchema = z.object({
  price: z.coerce.number()
})
