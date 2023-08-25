import { getAxiosConfig } from '@/lib/axiosConfig'
import {
  ProductCategoryEnum,
  ProductEntity,
  ProductEntityResponse
} from '../_types/products'

// export const getProducts = async () => {
//   const axios = getAxiosConfig()
//   const response = await axios.get(`/api/products?populate=*`)

//   const productEntityResponse = response?.data as ProductEntityResponse
//   const allProductEntity = productEntityResponse?.data as ProductEntity[]

//   return allProductEntity
// }

export const getProduct = async (id: number) => {
  const axios = getAxiosConfig()
  const response = await axios.get(`/api/products/${id}?populate=image`)

  const productEntityResponse = response?.data as ProductEntityResponse

  return productEntityResponse?.data?.attributes
}

export const getProductsByCategory = async (category: ProductCategoryEnum) => {
  const axios = getAxiosConfig()
  const response = await axios.get(
    `/api/products?filters[category][$eq]=${category}&populate=image`
  )

  const allProductsEntity = response?.data as ProductEntityResponse
  const products = allProductsEntity?.data as ProductEntity[]

  return products
}
