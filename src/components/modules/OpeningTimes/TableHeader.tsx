import { TableHeaderProps } from './types'

const TableHeader = ({ day, lunch, dinner }: TableHeaderProps) => {
  return (
    <thead>
      <tr>
        <th className='h-16 border border-border text-lg font-bold'>{day}</th>
        <th className='h-16 border border-border text-lg font-bold'>{lunch}</th>
        <th className='h-16 border border-border text-lg font-bold'>
          {dinner}
        </th>
      </tr>
    </thead>
  )
}
export default TableHeader
