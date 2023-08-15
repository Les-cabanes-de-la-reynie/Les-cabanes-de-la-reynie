import ProductsByCategoryList from '@/components/modules/ProductsByCategoryList'
import { getProducts, getProductsKey } from '@/services/products'
import getQueryClient from '@/utils/getQueryClient'
import Hydrate from '@/utils/hydrate.client'
import { dehydrate } from '@tanstack/query-core'

export default async function Hydation() {
  const queryClient = getQueryClient()
  await queryClient.prefetchQuery([getProductsKey], getProducts)
  const dehydratedState = dehydrate(queryClient)

  return (
    <Hydrate state={dehydratedState}>
      <ProductsByCategoryList />
    </Hydrate>
  )
}
