import { z } from 'zod'
import { CabinSchema } from './CabinSchema'

export type Cabin = z.infer<typeof CabinSchema>
