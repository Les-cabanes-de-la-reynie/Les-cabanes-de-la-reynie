import CancelButton from '@/components/elements/CancelButton'
import EditButton from '@/components/elements/EditButton'
import SubmitButton from '@/components/elements/SubmitButton'
import { useTranslations } from 'next-intl'

type EditableButtonsProps = {
  editable?: boolean
  isEdit: boolean
  handleToggleEdit: () => void
  isPending?: boolean
}

const EditableButtons = ({
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
            <CancelButton onClick={handleToggleEdit} />
          ) : (
            <EditButton onClick={handleToggleEdit} />
          )}
          {isEdit && (
            <SubmitButton disabled={isPending}>{t('update')}</SubmitButton>
          )}
        </div>
      )}
    </>
  )
}
export default EditableButtons
