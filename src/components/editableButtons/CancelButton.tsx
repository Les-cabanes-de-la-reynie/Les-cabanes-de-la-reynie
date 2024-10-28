import { Button } from '@/components/ui/button'
import { useTranslations } from 'next-intl'

type CancelButtonProps = {
  onClick: () => void
}

export const CancelButton = ({ onClick }: CancelButtonProps) => {
  const t = useTranslations('Common')

  return (
    <Button onClick={() => onClick()} variant={'outline'}>
      {t('cancel')}
    </Button>
  )
}
