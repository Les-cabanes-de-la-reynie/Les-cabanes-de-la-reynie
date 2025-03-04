import { Button } from '@/components/ui/button'
import { useTranslations } from 'next-intl'
import { ComponentProps } from 'react'

type EditButtonProps = ComponentProps<'button'> & {
  onClick: () => void
}

export const EditButton = ({ onClick }: EditButtonProps) => {
  const t = useTranslations('Common')
  return (
    <Button onClick={() => onClick()} variant={'outline'}>
      {t('edit')}
    </Button>
  )
}
