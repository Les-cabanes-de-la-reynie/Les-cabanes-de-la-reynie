export const PUBLIC_API_ROUTES = {
  address: '/api/address',
  visitorCount: '/api/visitorCount',
  signIn: '/api/auth/sign-in'
} as const

export const PROTECTED_API_ROUTES = {
  uploadthing: '/api/uploadthing'
} as const

export const API_ROUTES = {
  ...PUBLIC_API_ROUTES,
  ...PROTECTED_API_ROUTES
} as const
