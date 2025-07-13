import { AddressSchema } from '@/features/address/AddressSchema'
import { z } from 'zod'

export type Address = z.infer<typeof AddressSchema>
