import { queryOptions } from '@tanstack/react-query'
import { getUploadedImagesQueryKey } from '../_const'
import { UploadImageCategoryKeyEnum } from '../_types'
import {
  getCabinSliderImagesServer,
  getHomeSliderImagesServer,
  getYurtSliderImagesServer
} from './getUploadedImagesByCategoryServer'

// Server-side options (uses Prisma directly for SSG)
export const getHomeSliderImagesServerOptions = queryOptions({
  queryKey: getUploadedImagesQueryKey(UploadImageCategoryKeyEnum.HomeSlider),
  queryFn: getHomeSliderImagesServer
})

export const getYurtSliderImagesServerOptions = queryOptions({
  queryKey: getUploadedImagesQueryKey(UploadImageCategoryKeyEnum.YurtSlider),
  queryFn: getYurtSliderImagesServer
})

export const getCabinSliderImagesServerOptions = queryOptions({
  queryKey: getUploadedImagesQueryKey(UploadImageCategoryKeyEnum.CabinSlider),
  queryFn: getCabinSliderImagesServer
})
