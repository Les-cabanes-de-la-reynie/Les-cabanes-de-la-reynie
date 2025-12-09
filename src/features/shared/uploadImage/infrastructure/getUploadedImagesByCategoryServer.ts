import prisma from '@/shared/lib/prisma'
import { UploadedImage, UploadImageCategoryKeyEnum } from '../_types'

// Server-side function using Prisma (for SSG/SSR)
export const getUploadedImagesByCategoryServer = async (
  category: UploadImageCategoryKeyEnum
): Promise<UploadedImage[]> => {
  const uploadedImages = await prisma.image.findMany({
    where: { category }
  })

  return uploadedImages
}

// Specific functions for each category (server-side for SSG)
export const getHomeSliderImagesServer = () =>
  getUploadedImagesByCategoryServer(UploadImageCategoryKeyEnum.HomeSlider)

export const getYurtSliderImagesServer = () =>
  getUploadedImagesByCategoryServer(UploadImageCategoryKeyEnum.YurtSlider)

export const getCabinSliderImagesServer = () =>
  getUploadedImagesByCategoryServer(UploadImageCategoryKeyEnum.CabinSlider)
