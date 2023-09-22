import { ForwardRefRenderFunction, forwardRef, useId } from 'react'
import { CommonInputProps } from './types'
import { cn } from '@/utils/cn'

const TimeInput: ForwardRefRenderFunction<
  HTMLInputElement,
  CommonInputProps
> = (
  {
    label,
    className = '',
    inputClassName: incomingInputClassName = '',
    isEdit = true,
    onChange,
    ...props
  },
  ref
) => {
  const containerClassName = cn(
    'py-3',
    {
      flex: !isEdit
    },
    className
  )
  const labelClassName = cn('text-sm font-medium text-white', {
    'block mb-2': isEdit,
    'flex flex-none items-center pr-4': !isEdit
  })
  const inputClassName = cn(
    'block w-full p-2 text-sm rounded-lg text-primary-black bg-white border border-border dark:text-white dark:bg-zinc-900',
    {
      'border-transparent': !isEdit
    },
    incomingInputClassName
  )

  const id = useId()

  /***********
   * Component
   ***********/
  const labelComponent = !!label && (
    <label htmlFor={id} className={labelClassName}>
      {label}
    </label>
  )

  return (
    <div className={containerClassName}>
      {labelComponent}
      <input
        id={id}
        type='time'
        className={inputClassName}
        onChange={onChange}
        disabled={!isEdit}
        ref={ref}
        {...props}
      />
    </div>
  )
}
export default forwardRef(TimeInput)
