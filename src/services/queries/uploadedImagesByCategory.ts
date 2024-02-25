import { RevalidateTagsEnum } from '@/_types/revalidateTags'
import { UploadImage } from '@/_types/uploadImage'
import { db } from '@/lib/prisma'
import { UpdateUploadedImageCommonSchema } from '@/models/UploadedImages'
import { unstable_cache } from 'next/cache'
import { z } from 'zod'

const pickedCategory = UpdateUploadedImageCommonSchema.pick({ category: true })

type GetUploadedImagesByCategoryProps = z.infer<typeof pickedCategory>

export const getUploadedImagesByCategory = unstable_cache(
  async ({ category }: GetUploadedImagesByCategoryProps) => {
    return (await db.image.findMany({
      where: {
        category
      }
    })) as UploadImage[]
  },
  [RevalidateTagsEnum.IMAGE],
  { tags: [RevalidateTagsEnum.IMAGE] }
)
