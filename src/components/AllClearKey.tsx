import React from 'react'
import { useAppDispatch } from '../app/hooks'
import { reset as resetFormulaScreen } from '../features/formulaScreenSlice'
import { reset as resetOutputScreen } from '../features/outputScreenSlice'

export const AllClearKey = () => {
  const dispatch = useAppDispatch()

  const handleClick = () => {
    dispatch(resetFormulaScreen())
    dispatch(resetOutputScreen())
  }

  return (
    <div className="col-span-2 bg-medium-carmine flex items-center justify-center" onClick={handleClick}>
      AC
    </div>
  )
}
