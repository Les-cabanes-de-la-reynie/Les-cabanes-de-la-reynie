import {
  DeleteUploadImage,
  PostUploadImage
} from '@/features/shared/uploadImage/_types'
import {
  DeleteUploadedImageSchema,
  GetUploadedImagesSchema,
  UploadImageSchema
} from '@/features/shared/uploadImage/UploadedImagesSchema'
import {
  AuthenticatedRequest,
  withAuth
} from '@/shared/lib/auth-api-middleware'
import prisma from '@/shared/lib/prisma'
import { utapi } from '@/shared/lib/utapiUploadthing'
import { NextRequest, NextResponse } from 'next/server'

export const GET = async (request: NextRequest) => {
  const { searchParams } = new URL(request.url)
  const category = searchParams.get('category')

  const validationResult = GetUploadedImagesSchema.safeParse({
    category
  })

  if (!validationResult.success) {
    return new NextResponse(
      JSON.stringify({
        error: 'Validation failed',
        details: validationResult.error.message
      }),
      {
        status: 400,
        headers: {
          'Content-Type': 'application/json'
        }
      }
    )
  }

  const { category: parsedCategory } = validationResult.data

  try {
    const uploadedImages = await prisma.image.findMany({
      where: {
        category: parsedCategory
      }
    })

    return new NextResponse(JSON.stringify(uploadedImages), {
      status: 200,
      headers: {
        'Content-Type': 'application/json'
      }
    })
  } catch (error) {
    return new NextResponse(JSON.stringify({ error }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json'
      }
    })
  }
}

export const POST = withAuth(async (request: AuthenticatedRequest) => {
  try {
    const body: PostUploadImage = await request.json()
    const validationResult = UploadImageSchema.safeParse(body)

    if (!validationResult.success) {
      return new NextResponse(
        JSON.stringify({
          error: 'Validation failed',
          details: validationResult.error.message
        }),
        {
          status: 400,
          headers: {
            'Content-Type': 'application/json'
          }
        }
      )
    }

    const { key, url, category } = validationResult.data

    // Create new image in specific category
    const updatedImage = await prisma.image.create({
      data: {
        imageKey: key,
        imageUrl: url,
        category
      }
    })

    return new NextResponse(
      JSON.stringify({
        message: 'Image uploaded successfully',
        image: updatedImage
      }),
      {
        status: 201,
        headers: {
          'Content-Type': 'application/json'
        }
      }
    )
  } catch {
    return new NextResponse(
      JSON.stringify({ error: 'Failed to upload image' }),
      {
        status: 500,
        headers: {
          'Content-Type': 'application/json'
        }
      }
    )
  }
})

export const DELETE = withAuth(async (request: AuthenticatedRequest) => {
  try {
    const body: DeleteUploadImage = await request.json()
    const validationResult = DeleteUploadedImageSchema.safeParse(body)

    if (!validationResult.success) {
      return new NextResponse(
        JSON.stringify({
          error: 'Validation failed',
          details: validationResult.error.message
        }),
        {
          status: 400,
          headers: {
            'Content-Type': 'application/json'
          }
        }
      )
    }

    const { id, imageKey } = validationResult.data

    // Delete old image in uploadthing (https://uploadthing.com/) by his key
    await utapi.deleteFiles(imageKey)

    // Delete old images in postgre database
    await prisma.image.deleteMany({
      where: {
        id
      }
    })

    return new NextResponse(
      JSON.stringify({
        message: 'Image deleted successfully'
      }),
      {
        status: 201,
        headers: {
          'Content-Type': 'application/json'
        }
      }
    )
  } catch {
    return new NextResponse(
      JSON.stringify({ error: 'Failed to delete image' }),
      {
        status: 500,
        headers: {
          'Content-Type': 'application/json'
        }
      }
    )
  }
})
