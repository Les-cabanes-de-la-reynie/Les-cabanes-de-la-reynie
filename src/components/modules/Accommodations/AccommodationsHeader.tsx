import Image from 'next/image'
import { useTranslations } from 'next-intl'
import Heading from '@/components/elements/Heading'
import P from '@/components/elements/P'
import Container from '@/components/elements/Container'
import AccommodationsPopover from './AccommodationsPopover'
import { BookEntity } from './types'
import { UploadImageCategoryKeyEnum } from '@/_types/uploadImage'
import { getUploadedImagesByCategory } from '@/services/queries/uploadedImagesByCategory'

type AccommodationsHeaderProps = {
  title: string
  uploadImageCategoryKey: UploadImageCategoryKeyEnum
  bookList: BookEntity[]
}

const AccommodationsHeader = async ({
  title,
  uploadImageCategoryKey,
  bookList
}: AccommodationsHeaderProps) => {
  const t = useTranslations('Common')

  const headerImages = await getUploadedImagesByCategory(uploadImageCategoryKey)
  const lastHeaderImage = headerImages.at(-1)

  return (
    <header className='grid grid-cols-1 lg:grid-cols-2'>
      <div className='relative h-96 w-full select-none bg-popover lg:h-[calc(100vh-4.5rem)]'>
        <Image
          alt={`Main ${title} landscape`}
          src={lastHeaderImage?.imageUrl ?? ''}
          quality={100}
          fill
          sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw'
          className='object-cover'
          priority
        />
      </div>
      <Container className='flex flex-col justify-center lg:p-10'>
        <Heading level={1} className='mt-4 lg:mt-0'>
          {title}
        </Heading>

        <Heading level={2} className='mt-10'>
          {t('description')}
        </Heading>
        <P>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
          libero pariatur quod sapiente, molestiae incidunt facere qui impedit
          at voluptates ratione, unde, quis tempore quasi reiciendis doloribus.
          Cupiditate, atque animi.
        </P>
        <P className='italic'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
          libero pariatur quod sapiente, molestiae incidunt facere qui impedit
          at voluptates ratione, unde, quis tempore quasi reiciendis doloribus.
          Cupiditate, atque animi.
        </P>

        <Heading level={2} className='mt-10'>
          {t('price')}
        </Heading>
        <P>Tarif unique : 175€</P>

        <AccommodationsPopover bookList={bookList} />
      </Container>
    </header>
  )
}
export default AccommodationsHeader
