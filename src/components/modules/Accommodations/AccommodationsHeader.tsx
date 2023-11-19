import Image, { StaticImageData } from 'next/image'
import { useTranslations } from 'next-intl'
import Heading from '@/components/elements/Heading'
import P from '@/components/elements/P'
import { Button } from '@/components/ui/button'

type AccommodationsHeaderProps = {
  image: StaticImageData
  title: string
}

const AccommodationsHeader = ({ image, title }: AccommodationsHeaderProps) => {
  const t = useTranslations('Common')

  return (
    <header className='grid grid-cols-1 lg:min-h-screen lg:grid-cols-2'>
      <div className='relative h-96 w-full select-none lg:h-screen'>
        <Image
          alt='TODO'
          src={image}
          placeholder='blur'
          quality={100}
          fill
          sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw'
          className='object-cover'
          priority
        />
      </div>
      <div className='m-16 flex flex-col justify-center'>
        <Heading level={1}>{title}</Heading>
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

        <Button className='mt-10 lg:w-max'>{t('bookYourStay')}</Button>
      </div>
    </header>
  )
}
export default AccommodationsHeader
