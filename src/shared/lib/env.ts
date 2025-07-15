import { createEnv } from '@t3-oss/env-nextjs'
import { z } from 'zod'

export const env = createEnv({
  server: {
    BETTER_AUTH_SECRET: z.string().min(1),
    UPLOADTHING_TOKEN: z.string().min(1),
    ENABLE_VISITOR_COUNT: z.string().optional()
  },
  client: {
    NEXT_PUBLIC_BASE_URL: z.string().min(1),
    NEXT_PUBLIC_MAPBOX_KEY: z.string().min(1)
  },
  runtimeEnv: {
    BETTER_AUTH_SECRET: process.env.BETTER_AUTH_SECRET,
    UPLOADTHING_TOKEN: process.env.UPLOADTHING_TOKEN,
    ENABLE_VISITOR_COUNT: process.env.ENABLE_VISITOR_COUNT,
    NEXT_PUBLIC_BASE_URL: process.env.NEXT_PUBLIC_BASE_URL,
    NEXT_PUBLIC_MAPBOX_KEY: process.env.NEXT_PUBLIC_MAPBOX_KEY
  }
})
