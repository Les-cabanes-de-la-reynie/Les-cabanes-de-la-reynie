import { CancelButton } from '@/components/editableButtons/CancelButton'
import { EditButton } from '@/components/editableButtons/EditButton'
import { SubmitButton } from '@/components/editableButtons/SubmitButton'
import { useTranslations } from 'next-intl'

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
