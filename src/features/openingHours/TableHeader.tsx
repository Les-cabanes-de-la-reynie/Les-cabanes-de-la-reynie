export type TableHeaderProps = {
  day: string
  opening: string
  closing: string
}

export const TableHeader = ({ day, opening, closing }: TableHeaderProps) => {
  return (
    <thead>
      <tr>
        <th className='h-16 border border-zinc-300 text-lg dark:border-zinc-800'>
          {day}
        </th>
        <th className='h-16 border border-zinc-300 text-lg dark:border-zinc-800 '>
          {opening}
        </th>
        <th className='h-16 border border-zinc-300 text-lg dark:border-zinc-800 '>
          {closing}
        </th>
      </tr>
    </thead>
  )
}
