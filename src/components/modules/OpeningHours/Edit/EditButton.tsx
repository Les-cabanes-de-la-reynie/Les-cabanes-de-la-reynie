import { useTranslations } from 'next-intl'
import Button from 'components/elements/Button'

interface EditButtonProps {
  onClick: () => void
}

const EditButton = ({ onClick }: EditButtonProps) => {
  const t = useTranslations('Common')

  return (
    <Button onClick={() => onClick()} kind='border'>
      {t('edit')}
    </Button>
  )
}
export default EditButton
