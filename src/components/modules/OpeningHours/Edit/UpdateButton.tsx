import { useTranslations } from 'next-intl'
import Button from 'components/elements/Button'

const UpdateButton = () => {
  const t = useTranslations('Common')

  return (
    <Button type='submit' kind='valid'>
      {t('update')}
    </Button>
  )
}
export default UpdateButton
