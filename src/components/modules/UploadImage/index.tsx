import { UploadImage, UploadImageCategoryKeyEnum } from '@/_types/uploadImage'
import Heading from '@/components/elements/Heading'
import P from '@/components/elements/P'
import { Separator } from '@/components/ui/separator'
import { getUploadedImages } from '@/services/queries/uploadedImages'
import UploadImageCategory from './UploadImageCategory'

type UploadedImagesCategories = {
  [key: string]: UploadImage[]
}

const UploadImage = async () => {
  const uploadedImages = await getUploadedImages()

  const uploadedImagesCategories = uploadedImages.reduce((acc, curr) => {
    const { category } = curr

    if (!(category in acc)) {
      acc[category] = []
    }
    acc[category].push(curr)

    return acc
  }, {} as UploadedImagesCategories)

  return (
    <>
      <Heading level={2} className='mt-8'>
        Upload image
      </Heading>
      <P>
        Il faudrait mettre dans la mesure du possible des images uniquement en
        format WEBP
      </P>

      <Heading level={3} className='mt-8'>
        Home
      </Heading>
      <div className='flex flex-col justify-between gap-8 md:flex-row'>
        <UploadImageCategory
          title='Slider images'
          category={UploadImageCategoryKeyEnum.HomeSlider}
          images={uploadedImagesCategories.homeSlider}
        />
      </div>

      <Separator className='my-10' />

      <Heading level={3} className='mt-8'>
        Yourte
      </Heading>
      <div className='flex flex-col justify-between gap-8 md:flex-row'>
        <UploadImageCategory
          title='Slider images'
          category={UploadImageCategoryKeyEnum.YurtSlider}
          images={uploadedImagesCategories.yurtSlider}
        />
      </div>

      <Separator className='my-10' />

      <Heading level={3} className='mt-8'>
        Cabane
      </Heading>
      <div className='flex flex-col justify-between gap-8 md:flex-row'>
        <UploadImageCategory
          title='Slider images'
          category={UploadImageCategoryKeyEnum.HutSlider}
          images={uploadedImagesCategories.hutSlider}
        />
      </div>
    </>
  )
}
export default UploadImage
