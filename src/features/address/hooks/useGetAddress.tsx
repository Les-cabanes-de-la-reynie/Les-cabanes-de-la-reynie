import { getAddress } from '@/features/address/infrastructure/getAddress'
import { queryOptions } from '@tanstack/react-query'
import { ADDRESS_QUERY_KEY } from '../_const'

export const useGetAddress = queryOptions({
  queryKey: [ADDRESS_QUERY_KEY],
  queryFn: getAddress
})
