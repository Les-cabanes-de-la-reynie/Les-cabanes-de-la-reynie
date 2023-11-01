import { useTranslations } from 'next-intl'
import { Button } from '@/components/ui/button'

interface CancelButtonProps {
  onClick: () => void
}

const CancelButton = ({ onClick }: CancelButtonProps) => {
  const t = useTranslations('Common')

  return (
    <Button onClick={() => onClick()} variant={'outline'}>
      {t('cancel')}
    </Button>
  )
}
export default CancelButton
