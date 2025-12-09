import { queryOptions } from '@tanstack/react-query'
import { YURT_QUERY_KEY } from '../_const'
import { getYurtServer } from './getYurtServer'

// Server-side options (uses Prisma directly for SSG)
export const getYurtServerOptions = queryOptions({
  queryKey: [YURT_QUERY_KEY],
  queryFn: getYurtServer
})
