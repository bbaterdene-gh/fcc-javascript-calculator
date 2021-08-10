import React from 'react'
import { useAppDispatch } from '../app/hooks'
import { reset as resetFormulaScreen } from '../features/formulaScreenSlice'
import { addChar, reset as resetOutputScreen } from '../features/outputScreenSlice'

export const AllClearKey = () => {
  const dispatch = useAppDispatch()

  const handleClick = () => {
    dispatch(resetFormulaScreen())
    dispatch(resetOutputScreen())
    dispatch(addChar('0'))
  }

  return (
    <div className="col-span-2 bg-medium-carmine flex items-center justify-center" onClick={handleClick}>
      AC
    </div>
  )
}
