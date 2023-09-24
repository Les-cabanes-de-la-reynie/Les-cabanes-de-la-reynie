import { FormEvent, PropsWithChildren } from 'react'
import { formatStringTimeIntoDate } from '@/utils/formatStringTimeIntoDate'
import Button from '@/components/elements/Button'

const EditOpeningHoursForm = ({ children }: PropsWithChildren) => {
  const handleLoginSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const formData = new FormData(e.currentTarget)

    const mondayStart = formatStringTimeIntoDate(
      String(formData.get('mondayStart'))
    )
    const mondayEnd = formatStringTimeIntoDate(
      String(formData.get('mondayEnd'))
    )

    const tuesdayStart = formatStringTimeIntoDate(
      String(formData.get('tuesdayStart'))
    )
    const tuesdayEnd = formatStringTimeIntoDate(
      String(formData.get('tuesdayEnd'))
    )

    const wednesdayStart = formatStringTimeIntoDate(
      String(formData.get('wednesdayStart'))
    )
    const wednesdayEnd = formatStringTimeIntoDate(
      String(formData.get('wednesdayEnd'))
    )

    const thursdayStart = formatStringTimeIntoDate(
      String(formData.get('thursdayStart'))
    )
    const thursdayEnd = formatStringTimeIntoDate(
      String(formData.get('thursdayEnd'))
    )

    const fridayStart = formatStringTimeIntoDate(
      String(formData.get('fridayStart'))
    )
    const fridayEnd = formatStringTimeIntoDate(
      String(formData.get('fridayEnd'))
    )

    const saturdayStart = formatStringTimeIntoDate(
      String(formData.get('saturdayStart'))
    )
    const saturdayEnd = formatStringTimeIntoDate(
      String(formData.get('saturdayEnd'))
    )

    const sundayStart = formatStringTimeIntoDate(
      String(formData.get('sundayStart'))
    )
    const sundayEnd = formatStringTimeIntoDate(
      String(formData.get('sundayEnd'))
    )
  }

  return (
    <form onSubmit={handleLoginSubmit}>
      {children}
      <Button type='submit' className='mt-5' kind='valid'>
        Mettre à jour
      </Button>
    </form>
  )
}
export default EditOpeningHoursForm
