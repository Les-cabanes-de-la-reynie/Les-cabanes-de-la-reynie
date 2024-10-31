import { z } from 'zod'

export const YurtSchema = z.object({
  price: z.coerce.number()
})
