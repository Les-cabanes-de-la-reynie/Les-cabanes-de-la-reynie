import Heading from '@/components/elements/Heading'
import P from '@/components/elements/P'
import UploadImageCategory from './UploadImageCategory'
import { getUploadedImages } from '@/services/queries/uploadedImages'
import { UploadImageCategoryKeyEnum } from '@/_types/uploadImage'
import { Separator } from '@/components/ui/separator'

const UploadImage = async () => {
  const uploadedImages = await getUploadedImages()

  const yurtHeaderImage = uploadedImages.filter(
    ({ category }) => category === UploadImageCategoryKeyEnum.YurtHeader
  )
  const yurtSliderImages = uploadedImages.filter(
    ({ category }) => category === UploadImageCategoryKeyEnum.YurtSlider
  )

  const hutHeaderImage = uploadedImages.filter(
    ({ category }) => category === UploadImageCategoryKeyEnum.HutHeader
  )
  const hutSliderImages = uploadedImages.filter(
    ({ category }) => category === UploadImageCategoryKeyEnum.HutSlider
  )

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
        Yourte
      </Heading>
      <div className='flex flex-col justify-between gap-8 md:flex-row'>
        <UploadImageCategory
          title='Header image'
          category={UploadImageCategoryKeyEnum.YurtHeader}
          images={yurtHeaderImage}
        />
        <UploadImageCategory
          title='Slider images'
          category={UploadImageCategoryKeyEnum.YurtSlider}
          images={yurtSliderImages}
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
          images={hutHeaderImage}
        />
        <UploadImageCategory
          title='Slider images'
          category={UploadImageCategoryKeyEnum.HutSlider}
          images={hutSliderImages}
        />
      </div>
    </section>
  )
}
export default UploadImage
