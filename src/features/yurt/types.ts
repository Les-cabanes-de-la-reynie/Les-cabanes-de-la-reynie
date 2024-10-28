import { YurtDataSchema } from '@/models/Yurt'
import { z } from 'zod'

export type Yurt = z.infer<typeof YurtDataSchema>
