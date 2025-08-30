import { queryOptions } from '@tanstack/react-query'
import { VISITOR_COUNT_QUERY_KEY } from '../_const'
import { getVisitorCount } from './getVisitorCount'

export const getVisitorCountOptions = queryOptions({
  queryKey: [VISITOR_COUNT_QUERY_KEY],
  queryFn: getVisitorCount,
  staleTime: 5 * 60 * 1000 // 5 minutes
})
