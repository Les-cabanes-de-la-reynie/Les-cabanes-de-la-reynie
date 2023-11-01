import { Button } from '@/components/ui/button'
import { useTranslations } from 'next-intl'


const UpdateButton = () => {
  const t = useTranslations('Common')

  return (
    <Button type='submit' >
      {t('update')}
    </Button>
  )
}
export default UpdateButton
