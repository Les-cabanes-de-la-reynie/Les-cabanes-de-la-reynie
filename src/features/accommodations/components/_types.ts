import { UploadedImage } from '@/features/shared/uploadImage/_types'
import { Link } from '@/i18n/navigation'
import { StaticImageData } from 'next/image'
import { ComponentProps } from 'react'

export type BookEntity = {
  title: string
  href: string
}

export enum AccommodationTypeEnum {
  YURT = 'yurt',
  CABIN = 'cabin'
}

export type AccommodationsCardProps = {
  href: ComponentProps<typeof Link>['href']
  imageOnFront: StaticImageData
  imageOnHover: StaticImageData
  altFront: string
  altHover: string
  textContent: string
}

export type AccommodationsSliderProps = {
  title?: string
  uploadedImages: UploadedImage[]
  isLoading: boolean
}
