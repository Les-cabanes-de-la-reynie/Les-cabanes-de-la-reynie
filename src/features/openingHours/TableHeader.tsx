export type TableHeaderProps = {
  day: string
  opening: string
  closing: string
}

export const TableHeader = ({ day, opening, closing }: TableHeaderProps) => {
  return (
    <thead>
      <tr>
        <th className='h-16 border border-input text-lg'>{day}</th>
        <th className='h-16 border border-input text-lg '>{opening}</th>
        <th className='h-16 border border-input text-lg '>{closing}</th>
      </tr>
    </thead>
  )
}
