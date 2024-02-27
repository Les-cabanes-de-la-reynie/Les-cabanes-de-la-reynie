import { UploadImage } from '@/_types/uploadImage'
import { db } from '@/lib/prisma'
import { UpdateUploadedImageCommonSchema } from '@/models/UploadedImages'
import { z } from 'zod'

const pickedCategory = UpdateUploadedImageCommonSchema.pick({ category: true })

type GetUploadedImagesByCategoryProps = z.infer<typeof pickedCategory>

export const getUploadedImagesByCategory = async ({
  category
}: GetUploadedImagesByCategoryProps) => {
  try {
    return (await db.image.findMany({
      where: {
        category
      }
    })) as UploadImage[]
  } catch (error) {
    throw new Error('Failed to fetch uploaded images data')
  }
}
