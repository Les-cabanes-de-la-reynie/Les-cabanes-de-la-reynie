import { z } from 'zod'
import { AddressFormSchema } from '@/models/Address'

export type Address = z.infer<typeof AddressFormSchema>
