import { z } from 'zod'
import { AddressSchema } from './AddressSchema'

export type Address = z.infer<typeof AddressSchema>
