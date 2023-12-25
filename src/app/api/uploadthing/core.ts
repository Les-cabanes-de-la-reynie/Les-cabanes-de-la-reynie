import { createUploadthing, type FileRouter } from 'uploadthing/next'
import { getSession } from '@auth0/nextjs-auth0'

const f = createUploadthing()

const authCallback = async () => {
  // This code runs on your server before upload
  const user = await getSession()

  const userEmail = user?.user?.email
  const isEmailVerified = user?.user.email_verified

  // If you throw, the user will not be able to upload
  if (!userEmail || !isEmailVerified) throw new Error('Unauthorized')

  // Whatever is returned here is accessible in onUploadComplete as `metadata`
  return { userEmail: userEmail }
}

// FileRouter for your app, can contain multiple FileRoutes
export const ourFileRouter = {
  // Define as many FileRoutes as you like, each with a unique routeSlug
  yurtHeader: f({ image: { maxFileSize: '4MB' } })
    // Set permissions and file types for this FileRoute
    .middleware(authCallback)
    .onUploadComplete(async ({ metadata }) => {
      // !!! Whatever is returned here is sent to the clientside `onClientUploadComplete` callback
      return { uploadedBy: metadata.userEmail }
    }),
  yurtSlider: f({ image: { maxFileSize: '4MB' } })
    // Set permissions and file types for this FileRoute
    .middleware(authCallback)
    .onUploadComplete(async ({ metadata }) => {
      // !!! Whatever is returned here is sent to the clientside `onClientUploadComplete` callback
      return { uploadedBy: metadata.userEmail }
    }),
  hutHeader: f({ image: { maxFileSize: '4MB' } })
    // Set permissions and file types for this FileRoute
    .middleware(authCallback)
    .onUploadComplete(async ({ metadata }) => {
      // !!! Whatever is returned here is sent to the clientside `onClientUploadComplete` callback
      return { uploadedBy: metadata.userEmail }
    }),
  hutSlider: f({ image: { maxFileSize: '4MB' } })
    // Set permissions and file types for this FileRoute
    .middleware(authCallback)
    .onUploadComplete(async ({ metadata }) => {
      // !!! Whatever is returned here is sent to the clientside `onClientUploadComplete` callback
      return { uploadedBy: metadata.userEmail }
    })
} satisfies FileRouter

export type OurFileRouter = typeof ourFileRouter
