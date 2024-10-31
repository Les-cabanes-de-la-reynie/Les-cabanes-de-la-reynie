import { z } from 'zod'
import { YurtSchema } from './YurtSchema'

export type Yurt = z.infer<typeof YurtSchema>
