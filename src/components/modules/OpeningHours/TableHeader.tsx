import { TableHeaderProps } from './types'

const TableHeader = ({ day, opening, closing }: TableHeaderProps) => {
  return (
    <thead>
      <tr>
        <th className='h-16 border text-lg'>{day}</th>
        <th className='h-16 border text-lg '>{opening}</th>
        <th className='h-16 border text-lg '>{closing}</th>
      </tr>
    </thead>
  )
}
export default TableHeader
