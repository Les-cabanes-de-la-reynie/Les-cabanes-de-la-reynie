export const UPLOADED_IMAGES_QUERY_KEY = 'uploadedImagesQueryKey'

export const getUploadedImagesQueryKey = (category: string) =>
  [UPLOADED_IMAGES_QUERY_KEY, category] as const
