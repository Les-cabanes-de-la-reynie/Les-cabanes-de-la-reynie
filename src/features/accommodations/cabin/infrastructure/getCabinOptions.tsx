import { queryOptions } from '@tanstack/react-query'
import { CABIN_QUERY_KEY } from '../_const'
import { getCabin } from './getCabin'

// Client-side options (uses API fetch)
export const getCabinOptions = queryOptions({
  queryKey: [CABIN_QUERY_KEY],
  queryFn: getCabin
})
