import { API_ROUTES } from '@/shared/_constants/api'
import { env } from '@/shared/lib/env'
import { UploadedImage } from '../_types'

export const deleteUploadedImage = async (
  id: string,
  imageKey: string
): Promise<UploadedImage> => {
  try {
    const response = await fetch(
      `${env.NEXT_PUBLIC_BASE_URL}${API_ROUTES.uploadImage}`,
      {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ id, imageKey })
      }
    )

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    return response.json()
  } catch (error) {
    throw new Error(`Failed to upload image. ${error}`)
  }
}
