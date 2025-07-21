import { API_ROUTES } from '@/shared/_constants/api'
import { env } from '@/shared/lib/env'
import { PostUploadImage } from '../_types'

export const postUploadImage = async (
  image: PostUploadImage
): Promise<PostUploadImage> => {
  try {
    const response = await fetch(
      `${env.NEXT_PUBLIC_BASE_URL}${API_ROUTES.uploadImage}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(image)
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
