export const PUBLIC_API_ROUTES = {
  address: '/api/address',
  visitorCount: '/api/visitorCount'
} as const

export const PROTECTED_API_ROUTES = {
  uploadthing: '/api/uploadthing',
  auth: '/api/auth'
} as const

export const API_ROUTES = {
  ...PUBLIC_API_ROUTES,
  ...PROTECTED_API_ROUTES
} as const
