import { queryOptions } from '@tanstack/react-query'
import { OPENING_HOURS_QUERY_KEY } from '../_const'
import { getOpeningHoursServer } from './getOpeningHoursServer'

// Server-side options (uses Prisma directly for SSG)
export const getOpeningHoursServerOptions = queryOptions({
  queryKey: [OPENING_HOURS_QUERY_KEY],
  queryFn: getOpeningHoursServer
})
