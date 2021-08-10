import { useAppDispatch, useAppSelector } from "../app/hooks"
import { addChar as addCharToFormulaScreen, selectFormulaScreen } from "../features/formulaScreenSlice"
import { addChar as addCharToOutputScreen } from "../features/outputScreenSlice"
import { operatorKeys } from "./OperatorKey"

export const DotKey = (props: DotKeyProps) => {
  const operators = Object.values(operatorKeys)
  const formulaScreen = useAppSelector(selectFormulaScreen)
  const dispatch = useAppDispatch()

  const handleClick = () => {
    // */+-
    const joinedOperators = operators.join('')
    const re = new RegExp(`[${joinedOperators}]+`, "g")
    const numbers = formulaScreen.split(re)
    if (formulaScreen === '') {
      dispatch(addCharToFormulaScreen('0'))
      dispatch(addCharToFormulaScreen('.'))
      dispatch(addCharToOutputScreen('.'))
    } else {
      const number = numbers[numbers.length - 1]
      if (!number.includes('.')) {
        dispatch(addCharToFormulaScreen('.'))
        dispatch(addCharToOutputScreen('.'))
      }
    }
  }

  return (
    <div className={`bg-charcoal flex items-center justify-center`} onClick={handleClick}>
      {props.children}
    </div>
  )
}

interface DotKeyProps {
  children: string,
}
