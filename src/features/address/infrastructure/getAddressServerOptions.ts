import { queryOptions } from '@tanstack/react-query'
import { ADDRESS_QUERY_KEY } from '../_const'
import { getAddressServer } from './getAddressServer'

// Server-side options (uses Prisma directly for SSG)
export const getAddressServerOptions = queryOptions({
  queryKey: [ADDRESS_QUERY_KEY],
  queryFn: getAddressServer
})
