'use server'

import { db } from '@/lib/prisma'
import { revalidatePath } from 'next/cache'
import { UploadImageCategoryKeyEnum } from '@/_types/uploadImage'

type UpdateMultipleUploadedImageProps = {
  key: string
  url: string
  category: UploadImageCategoryKeyEnum
}

export const updateMultipleUploadedImage = async ({
  key,
  url,
  category
}: UpdateMultipleUploadedImageProps) => {
  try {
    // Create new image in specific category
    await db.image.create({
      data: {
        imageKey: key,
        imageUrl: url,
        category
      }
    })

    revalidatePath('/[locale]/logements', 'layout')
  } catch (error) {
    return error
  }
}
