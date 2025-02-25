import { Button } from '@/components/ui/button'
import { useTranslations } from 'next-intl'
import { ComponentProps } from 'react'

type CancelButtonProps = ComponentProps<'button'> & {
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
