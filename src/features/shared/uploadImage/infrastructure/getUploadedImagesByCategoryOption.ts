import { queryOptions } from '@tanstack/react-query'
import { getUploadedImagesQueryKey } from '../_const'
import { UploadImageCategoryKeyEnum } from '../_types'
import {
  getCabinSliderImages,
  getHomeSliderImages,
  getYurtSliderImages
} from './getUploadedImagesByCategory'

export const getHomeSliderImagesOptions = queryOptions({
  queryKey: getUploadedImagesQueryKey(UploadImageCategoryKeyEnum.HomeSlider),
  queryFn: getHomeSliderImages
})

export const getYurtSliderImagesOptions = queryOptions({
  queryKey: getUploadedImagesQueryKey(UploadImageCategoryKeyEnum.YurtSlider),
  queryFn: getYurtSliderImages
})

export const getCabinSliderImagesOptions = queryOptions({
  queryKey: getUploadedImagesQueryKey(UploadImageCategoryKeyEnum.CabinSlider),
  queryFn: getCabinSliderImages
})
