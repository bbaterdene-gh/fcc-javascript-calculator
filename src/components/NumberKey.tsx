import { useAppDispatch, useAppSelector } from "../app/hooks"
import { addChar as addCharToFormula, reset as resetFormulaScreen, selectFormulaScreen } from "../features/formulaScreenSlice"
import { addChar as addCharToOutput, reset as resetOutputScreen, selectOutputScreen } from "../features/outputScreenSlice"

export const NumberKey = (props: NumberKeyProps) => {
  const dispatch = useAppDispatch()
  const formulaScreen = useAppSelector(selectFormulaScreen)
  const outputScreen = useAppSelector(selectOutputScreen)
  const handleClick = () => {
    if (formulaScreen.includes('=')) {
      dispatch(resetFormulaScreen())
      dispatch(resetOutputScreen())
    }
    if (formulaScreen === '0') {
      dispatch(resetFormulaScreen())
    }
    if (outputScreen === '0') {
      dispatch(resetOutputScreen())
    }
    dispatch(addCharToFormula(props.children))
    dispatch(addCharToOutput(props.children))
  }

  return (
    <div className={`bg-charcoal flex items-center justify-center`} onClick={handleClick}>
      {props.children}
    </div>
  )
}

interface NumberKeyProps {
  children: string,
}
