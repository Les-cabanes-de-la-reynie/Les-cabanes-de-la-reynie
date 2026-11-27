export type TableHeaderProps = {
  day: string
  opening: string
  closing: string
}

export const TableHeader = ({ day, opening, closing }: TableHeaderProps) => {
  return (
    <thead>
      <tr>
        <th
          scope='col'
          className='h-12 border-b bg-card text-sm font-semibold text-muted-foreground'
        >
          {day}
        </th>
        <th
          scope='col'
          className='h-12 border-b bg-card text-sm font-semibold text-muted-foreground'
        >
          {opening}
        </th>
        <th
          scope='col'
          className='h-12 border-b bg-card text-sm font-semibold text-muted-foreground'
        >
          {closing}
        </th>
      </tr>
    </thead>
  )
}
