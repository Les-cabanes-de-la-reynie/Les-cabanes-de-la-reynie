import { API_ROUTES } from '@/shared/_constants/api'
import { env } from '@/shared/lib/env'
import { UploadedImage, UploadImageCategoryKeyEnum } from '../_types'

export const getUploadedImagesByCategory = async (
  category: UploadImageCategoryKeyEnum
): Promise<UploadedImage[]> => {
  try {
    const response = await fetch(
      `${env.NEXT_PUBLIC_BASE_URL}${API_ROUTES.uploadImage}/?category=${category}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      }
    )

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    return response.json()
  } catch (error) {
    throw new Error(`Failed to fetch uploaded images data. ${error}`)
  }
}
