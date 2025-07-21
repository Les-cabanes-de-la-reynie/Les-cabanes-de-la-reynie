import { queryOptions } from '@tanstack/react-query'
import { UPLOADED_IMAGES_QUERY_KEY } from '../_const'
import { UploadImageCategoryKeyEnum } from '../_types'
import { getUploadedImagesByCategory } from './getUploadedImagesByCategory'

export const getUploadedImagesByCategoryOption = queryOptions({
  queryKey: [UPLOADED_IMAGES_QUERY_KEY],
  queryFn: ({ meta }) =>
    getUploadedImagesByCategory(meta?.category as UploadImageCategoryKeyEnum)
})
