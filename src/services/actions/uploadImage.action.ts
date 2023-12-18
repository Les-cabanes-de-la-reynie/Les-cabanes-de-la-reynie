'use server'

import { db } from '@/lib/prisma'
import { revalidatePath } from 'next/cache'

type uploadImageActionProps = {
  key: string
  url: string
  category: string
}

export const uploadImageAction = async ({
  key,
  url,
  category
}: uploadImageActionProps) => {
  try {
    // Delete old images in specific category
    await db.image.deleteMany({
      where: {
        category
      }
    })

    // Create new image in specific category
    await db.image.create({
      data: {
        imageKey: key,
        imageUrl: url,
        category: category
      }
    })

    revalidatePath('/[locale]/logements', 'layout')
  } catch (error) {
    return error
  }
}
