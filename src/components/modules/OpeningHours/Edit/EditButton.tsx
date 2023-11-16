import { Button } from '@/components/ui/button'

type EditButtonProps = {
  onClick: () => void
}

const EditButton = ({ onClick }: EditButtonProps) => {
  return (
    <Button onClick={() => onClick()} variant={'outline'}>
      Edit
    </Button>
  )
}
export default EditButton
