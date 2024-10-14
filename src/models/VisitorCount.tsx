import { z } from 'zod'

export const VisitorCountSchema = z.coerce.number()
