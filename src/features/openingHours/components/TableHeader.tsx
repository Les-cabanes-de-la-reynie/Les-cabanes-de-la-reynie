export type TableHeaderProps = {
  day: string
  opening: string
  closing: string
}

export const TableHeader = ({ day, opening, closing }: TableHeaderProps) => {
  return (
    <thead>
      <tr>
        <th scope='col' className='h-16 border border-input text-lg'>
          {day}
        </th>
        <th scope='col' className='h-16 border border-input text-lg'>
          {opening}
        </th>
        <th scope='col' className='h-16 border border-input text-lg'>
          {closing}
        </th>
      </tr>
    </thead>
  )
}
