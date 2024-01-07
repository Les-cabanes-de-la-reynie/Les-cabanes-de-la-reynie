import Heading from '@/components/elements/Heading'
import P from '@/components/elements/P'
import UploadImageCategory from './UploadImageCategory'
import { getUploadedImages } from '@/services/queries/uploadedImages'
import { UploadImage, UploadImageCategoryKeyEnum } from '@/_types/uploadImage'
import { Separator } from '@/components/ui/separator'

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
    <section>
      <Heading level={2} className='mt-8'>
        Upload image
      </Heading>
      <P>
        Il faudrait mettre dans la mesure du possible des images uniquement en
        format WEBP
      </P>
      <P>Il faut upload les images un par un pour le moment</P>

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
          title='Header image'
          category={UploadImageCategoryKeyEnum.YurtHeader}
          images={uploadedImagesCategories.yurtHeader}
        />
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
          title='Header image'
          category={UploadImageCategoryKeyEnum.HutHeader}
          images={uploadedImagesCategories.hutHeader}
        />
        <UploadImageCategory
          title='Slider images'
          category={UploadImageCategoryKeyEnum.HutSlider}
          images={uploadedImagesCategories.hutSlider}
        />
      </div>
    </section>
  )
}
export default UploadImage
