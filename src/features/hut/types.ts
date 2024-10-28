import { z } from 'zod'
import { HutSchema } from './HutSchema'

export type Hut = z.infer<typeof HutSchema>
