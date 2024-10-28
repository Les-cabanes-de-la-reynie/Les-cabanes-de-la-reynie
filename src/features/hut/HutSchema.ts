import { z } from 'zod'

export const HutSchema = z.object({
  price: z.coerce.number()
})
