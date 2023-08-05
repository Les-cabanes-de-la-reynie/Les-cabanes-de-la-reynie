import { getAxiosConfig } from '@/lib/axiosConfig'
import { ProductEntityResponse } from '../_types/products'

export const getProducts = async () => {
  const axios = getAxiosConfig()

  const response = await axios.get(`/api/products?populate=*`)

  return response.data as ProductEntityResponse
}

export const getProduct = async (id: number) => {
  const axios = getAxiosConfig()

  const response = await axios.get(`/api/products/${id}`)

  return response.data as ProductEntityResponse
}
