import { queryOptions } from '@tanstack/react-query'
import { YURT_QUERY_KEY } from '../_const'
import { getYurt } from './getYurt'

export const getYurtOptions = queryOptions({
  queryKey: [YURT_QUERY_KEY],
  queryFn: getYurt
})
