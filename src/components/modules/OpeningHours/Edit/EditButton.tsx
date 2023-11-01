import { Button } from '@/components/ui/button'
import { useTranslations } from 'next-intl'

interface EditButtonProps {
  onClick: () => void
}

const EditButton = ({ onClick }: EditButtonProps) => {
  const t = useTranslations('Common')

  return (
    <Button onClick={() => onClick()} variant={'outline'}>
      {t('edit')}
    </Button>
  )
}
export default EditButton
