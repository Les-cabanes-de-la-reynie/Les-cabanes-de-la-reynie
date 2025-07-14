import { API_ROUTES } from '@/shared/_constants/api'
import { env } from '@/shared/lib/env'

export const getAddress = async () => {
  try {
    const response = await fetch(
      `${env.NEXT_PUBLIC_BASE_URL}${API_ROUTES.address}`
    )

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    return response.json()
  } catch (error) {
    throw new Error(`Failed to fetch address data. ${error}`)
  }
}
