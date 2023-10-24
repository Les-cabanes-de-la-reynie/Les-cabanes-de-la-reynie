import { useTranslations } from 'next-intl'
import Button from 'components/elements/Button'

interface CancelButtonProps {
  onClick: () => void
}

const CancelButton = ({ onClick }: CancelButtonProps) => {
  const t = useTranslations('Common')

  return (
    <Button onClick={() => onClick()} kind='border'>
      {t('cancel')}
    </Button>
  )
}
export default CancelButton
