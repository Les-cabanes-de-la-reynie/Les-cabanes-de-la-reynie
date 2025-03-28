import { Button } from '@/components/ui/button'
import { useTranslations } from 'next-intl'
import { ComponentProps } from 'react'

type EditButtonProps = ComponentProps<'button'> & {
  disabled?: boolean
  onClick: () => void
}

export const EditButton = ({ disabled, onClick }: EditButtonProps) => {
  const t = useTranslations('Common')
  return (
    <Button onClick={() => onClick()} variant={'outline'} disabled={disabled}>
      {t('edit')}
    </Button>
  )
}
