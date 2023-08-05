import axios from 'axios'

export const getAxiosConfig = () => {
  return axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL
  })
}
