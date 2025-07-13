import { useTranslations } from 'next-intl'
import { CancelButton } from './CancelButton'
import { EditButton } from './EditButton'
import { SubmitButton } from './SubmitButton'

type EditableButtonsProps = {
  editable: boolean
  isEdit: boolean
  handleToggleEdit: () => void
  isPending?: boolean
}

export const EditableButtons = ({
  editable,
  isEdit,
  handleToggleEdit,
  isPending
}: EditableButtonsProps) => {
  const t = useTranslations('Common')

  return (
    <>
      {editable && (
        <div className='mt-4 flex justify-end gap-2'>
          {isEdit ? (
            <CancelButton disabled={isPending} onClick={handleToggleEdit} />
          ) : (
            <EditButton disabled={isPending} onClick={handleToggleEdit} />
          )}
          {isEdit && (
            <SubmitButton disabled={isPending}>{t('update')}</SubmitButton>
          )}
        </div>
      )}
    </>
  )
}
