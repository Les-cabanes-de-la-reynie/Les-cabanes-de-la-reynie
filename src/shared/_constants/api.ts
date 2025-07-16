export const PUBLIC_API_ROUTES = {
  address: '/api/address',
  openingHours: '/api/openingHours',
  visitorCount: '/api/visitorCount',
  signIn: '/api/auth/sign-in',
  cabin: '/api/accommodations/cabin',
  yurt: '/api/accommodations/yurt'
} as const

export const PROTECTED_API_ROUTES = {
  uploadthing: '/api/uploadthing'
} as const

export const API_ROUTES = {
  ...PUBLIC_API_ROUTES,
  ...PROTECTED_API_ROUTES
} as const
