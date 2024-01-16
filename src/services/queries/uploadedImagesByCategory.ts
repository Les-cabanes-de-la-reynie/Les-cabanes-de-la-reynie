import { z } from 'zod'
import { db } from '@/lib/prisma'
import { UpdateUploadedImageCommonSchema } from '@/models/UploadedImages'
import { UploadImage } from '@/_types/uploadImage'

const pickedCategory = UpdateUploadedImageCommonSchema.pick({ category: true })

type GetUploadedImagesByCategoryProps = z.infer<typeof pickedCategory>

export const getUploadedImagesByCategory = async ({
  category
}: GetUploadedImagesByCategoryProps) => {
  return (await db.image.findMany({
    where: {
      category
    }
  })) as UploadImage[]
}
