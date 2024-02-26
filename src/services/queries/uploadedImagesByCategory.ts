import { RevalidateTag } from '@/_types/revalidateTags'
import { UploadImage } from '@/_types/uploadImage'
import { db } from '@/lib/prisma'
import { UpdateUploadedImageCommonSchema } from '@/models/UploadedImages'
import { unstable_cache } from 'next/cache'
import { z } from 'zod'

const pickedCategory = UpdateUploadedImageCommonSchema.pick({ category: true })

type GetUploadedImagesByCategoryProps = z.infer<typeof pickedCategory>

export const getUploadedImagesByCategory = unstable_cache(
  async ({ category }: GetUploadedImagesByCategoryProps) => {
    try {
      return (await db.image.findMany({
        where: {
          category
        }
      })) as UploadImage[]
    } catch (error) {
      throw new Error('Failed to fetch uploaded images data')
    }
  },
  [RevalidateTag.IMAGE],
  { tags: [RevalidateTag.IMAGE] }
)
