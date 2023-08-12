import { TableHeaderProps } from './types'

const TableHeader = ({ day, lunch, dinner }: TableHeaderProps) => {
  return (
    <thead>
      <tr>
        <th className='h-20 border border-border text-xl font-bold'>{day}</th>
        <th className='h-20 border border-border text-xl font-bold'>{lunch}</th>
        <th className='h-20 border border-border text-xl font-bold'>
          {dinner}
        </th>
      </tr>
    </thead>
  )
}
export default TableHeader
