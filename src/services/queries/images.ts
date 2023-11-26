import { YOURTE_HEADER_KEY } from '@/_constants/uploadImage'
import prisma from '../../lib/prisma'

export const getYourteHeaderImage = async () => {
  return await prisma.image.findMany({
    where: {
      category: YOURTE_HEADER_KEY
    }
  })
}
