'use server'

import { db } from '@/lib/prisma'
import { revalidatePath } from 'next/cache'
import { getUploadedImagesByCategory } from '../queries/uploadedImagesByCategory'
import { UploadImageCategoryKeyEnum } from '@/_types/uploadImage'
import { utapi } from '@/lib/utapiUploadthing'

type UpdateSingleUploadedImageProps = {
  key: string
  url: string
  category: UploadImageCategoryKeyEnum
}

export const updateSingleUploadedImage = async ({
  key,
  url,
  category
}: UpdateSingleUploadedImageProps) => {
  try {
    const uploadedImages = await getUploadedImagesByCategory(category)

    const lastUploadedImage = uploadedImages.at(-1)

    // Delete old image in uploadthing (https://uploadthing.com/) by his key
    if (lastUploadedImage && 'imageKey' in lastUploadedImage) {
      await utapi.deleteFiles(lastUploadedImage.imageKey)
    }

    // Delete old images in postgre database
    if (lastUploadedImage && 'id' in lastUploadedImage) {
      await db.image.deleteMany({
        where: {
          id: lastUploadedImage.id
        }
      })
    }

    // Create new image in specific category
    await db.image.create({
      data: {
        imageKey: key,
        imageUrl: url,
        category
      }
    })

    revalidatePath('/[locale]/logements', 'layout')
    revalidatePath('/[locale]/admin', 'layout')
  } catch (error) {
    return error
  }
}
