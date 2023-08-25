import { useReducer } from 'react'

const useToggle = (init = false) => useReducer(val => !val, init)

export default useToggle
