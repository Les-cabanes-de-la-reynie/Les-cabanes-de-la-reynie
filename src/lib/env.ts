import { createEnv } from '@t3-oss/env-nextjs'
import { z } from 'zod'

export const env = createEnv({
  server: {
    AUTH0_SECRET: z.string().min(1),
    AUTH0_BASE_URL: z.string().min(1),
    AUTH0_ISSUER_BASE_URL: z.string().min(1),
    AUTH0_CLIENT_ID: z.string().min(1),
    AUTH0_CLIENT_SECRET: z.string().min(1),
    UPLOADTHING_SECRET: z.string().min(1),
    UPLOADTHING_APP_ID: z.string().min(1),
    NODE_ENV: z.enum(['development', 'test', 'production'])
  },
  client: {
    NEXT_PUBLIC_BASE_URL: z.string().min(1),
    NEXT_PUBLIC_LANG: z.enum(['fr', 'en']),
    NEXT_PUBLIC_LANGS: z.array(z.string().min(2)),
    NEXT_PUBLIC_MAPBOX_KEY: z.string().min(1)
  },
  runtimeEnv: {
    AUTH0_SECRET: process.env.AUTH0_SECRET,
    AUTH0_BASE_URL: process.env.AUTH0_BASE_URL,
    AUTH0_ISSUER_BASE_URL: process.env.AUTH0_ISSUER_BASE_URL,
    AUTH0_CLIENT_ID: process.env.AUTH0_CLIENT_ID,
    AUTH0_CLIENT_SECRET: process.env.AUTH0_CLIENT_SECRET,
    UPLOADTHING_SECRET: process.env.UPLOADTHING_SECRET,
    UPLOADTHING_APP_ID: process.env.UPLOADTHING_APP_ID,
    NODE_ENV: process.env.NODE_ENV,
    NEXT_PUBLIC_BASE_URL: process.env.NEXT_PUBLIC_BASE_URL,
    NEXT_PUBLIC_LANG: process.env.NEXT_PUBLIC_LANG,
    NEXT_PUBLIC_LANGS: JSON.parse(process.env.NEXT_PUBLIC_LANGS!),
    NEXT_PUBLIC_MAPBOX_KEY: process.env.NEXT_PUBLIC_MAPBOX_KEY
  }
})
