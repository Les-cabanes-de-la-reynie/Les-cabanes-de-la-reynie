import { queryOptions } from '@tanstack/react-query'
import { CABIN_QUERY_KEY } from '../_const'
import { getCabinServer } from './getCabinServer'

// Server-side options (uses Prisma directly for SSG)
export const getCabinServerOptions = queryOptions({
  queryKey: [CABIN_QUERY_KEY],
  queryFn: getCabinServer
})
