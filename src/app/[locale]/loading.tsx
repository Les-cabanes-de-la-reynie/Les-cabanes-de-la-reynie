import { Container } from '@/shared/components/Container'
import { Loader } from '@/shared/components/Loader'
import { P } from '@/shared/components/P'
import { getTranslations } from 'next-intl/server'

const Loading = async () => {
  const t = await getTranslations('Common')

  return (
    <Container center>
      <div className='flex items-center gap-2'>
        <P className='mr-2'>{t('loading')}</P>
        <div>
          <Loader />
        </div>
      </div>
    </Container>
  )
}

export default Loading
