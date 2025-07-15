import { getSession } from '@/shared/lib/auth-serveur'
import { createUploadthing, type FileRouter } from 'uploadthing/next'
import { UploadThingError } from 'uploadthing/server'

const f = createUploadthing()

const authCallback = async () => {
  const session = await getSession()

  if (!session || !session.user || !session.user.email)
    throw new UploadThingError('Not authenticated')

  const userEmail = session.user.email
  const userToken = session.session.token

  // If you throw, the user will not be able to upload
  if (!userEmail || !userToken) throw new UploadThingError('Unauthorized')

  // Whatever is returned here is accessible in onUploadComplete as `metadata`
  return { userEmail: userEmail }
}

// FileRouter for your app, can contain multiple FileRoutes
export const ourFileRouter = {
  // Define as many FileRoutes as you like, each with a unique routeSlug
  homeSlider: f({ image: { maxFileSize: '4MB', maxFileCount: 1 } })
    .middleware(authCallback)
    .onUploadComplete(async ({ metadata }) => {
      // !!! Whatever is returned here is sent to the clientside `onClientUploadComplete` callback
      return { uploadedBy: metadata.userEmail }
    }),
  yurtSlider: f({ image: { maxFileSize: '4MB', maxFileCount: 1 } })
    .middleware(authCallback)
    .onUploadComplete(async ({ metadata }) => {
      return { uploadedBy: metadata.userEmail }
    }),
  cabinSlider: f({ image: { maxFileSize: '4MB', maxFileCount: 1 } })
    .middleware(authCallback)
    .onUploadComplete(async ({ metadata }) => {
      return { uploadedBy: metadata.userEmail }
    })
} satisfies FileRouter

export type OurFileRouter = typeof ourFileRouter
