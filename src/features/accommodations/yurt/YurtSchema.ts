import { z } from 'zod'

export const YurtSchema = z.object({
  price: z.number()
})

export type YurtFormInput = z.input<typeof YurtSchema>
export type YurtFormOutput = z.output<typeof YurtSchema>
