import { ClassNameProps } from '_types/components'
import { HTMLProps, ReactNode } from 'react'

export interface UseInputClassNamesResult {
  labelClassName: string
  inputClassName: string
}

export interface CommonInputProps
  extends ClassNameProps,
    Omit<HTMLProps<HTMLInputElement>, 'multiple' | 'id' | 'type' | 'label'> {
  label?: ReactNode
  inputClassName?: string
  max?: number
  value?: string
  isEdit?: boolean
}
