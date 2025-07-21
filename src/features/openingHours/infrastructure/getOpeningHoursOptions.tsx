import { getOpeningHours } from '@/features/openingHours/infrastructure/getOpeningHours'
import { queryOptions } from '@tanstack/react-query'
import { OPENING_HOURS_QUERY_KEY } from '../_const'

export const getOpeningHoursOptions = queryOptions({
  queryKey: [OPENING_HOURS_QUERY_KEY],
  queryFn: getOpeningHours
})
