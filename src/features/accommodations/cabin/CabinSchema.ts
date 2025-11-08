import { z } from 'zod'

export const CabinSchema = z.object({
  price: z.number()
})

export type CabinFormInput = z.input<typeof CabinSchema>
export type CabinFormOutput = z.output<typeof CabinSchema>
