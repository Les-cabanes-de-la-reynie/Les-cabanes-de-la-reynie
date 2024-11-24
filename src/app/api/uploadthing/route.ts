import { env } from '@/lib/env'
import { createRouteHandler } from 'uploadthing/next'
import { ourFileRouter } from './core'

// Export routes for Next App Router
export const { GET, POST } = createRouteHandler({
  router: ourFileRouter,
  config: {
    token: env.UPLOADTHING_TOKEN
  }
})
