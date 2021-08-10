import { evaluate } from "mathjs"
import { useAppDispatch, useAppSelector } from "../app/hooks"
import { addChar as addCharToFormulaScreen, selectFormulaScreen } from "../features/formulaScreenSlice"
import { addChar as addCharToOutputScreen, reset } from "../features/outputScreenSlice"

export const EqualKey = () => {
  const formulaScreen = useAppSelector(selectFormulaScreen)
  const dispatch = useAppDispatch()

  const handleClick = () => {
    if ( formulaScreen.includes('=') ) return
    const value = evaluate(formulaScreen)
    dispatch(reset())
    dispatch(addCharToOutputScreen(value))
    dispatch(addCharToFormulaScreen('= '))
    dispatch(addCharToFormulaScreen(value))
  }

  return (
    <div className="bg-prussian-blue row-span-2 flex items-center justify-center" onClick={handleClick} id="equals">
      =
    </div>
  )
}
