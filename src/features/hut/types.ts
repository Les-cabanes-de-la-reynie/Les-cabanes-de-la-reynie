import { HutDataSchema } from '@/models/Hut'
import { z } from 'zod'

export type Hut = z.infer<typeof HutDataSchema>
