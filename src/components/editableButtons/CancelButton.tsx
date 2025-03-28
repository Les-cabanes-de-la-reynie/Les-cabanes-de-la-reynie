import { Button } from '@/components/ui/button'
import { useTranslations } from 'next-intl'
import { ComponentProps } from 'react'

type CancelButtonProps = ComponentProps<'button'> & {
  disabled?: boolean
  onClick: () => void
}

export const CancelButton = ({ disabled, onClick }: CancelButtonProps) => {
  const t = useTranslations('Common')

  return (
    <Button onClick={() => onClick()} variant={'outline'} disabled={disabled}>
      {t('cancel')}
    </Button>
  )
}
