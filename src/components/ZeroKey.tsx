import { useAppDispatch, useAppSelector } from "../app/hooks"
import { addChar as addCharToFormula, selectFormulaScreen } from "../features/formulaScreenSlice"
import { addChar as addCharToOutput } from "../features/outputScreenSlice"

export const ZeroKey = (props: ZeroKeyProps) => {

  const dispatch = useAppDispatch()
  const formulaScreen = useAppSelector(selectFormulaScreen)

  const handleClick = () => {
    if (formulaScreen !== '0') {
      dispatch(addCharToFormula(props.children))
      dispatch(addCharToOutput(props.children))
    }
  }

  return (
    <div className="bg-charcoal col-span-2 flex items-center justify-center" onClick={handleClick}>
      {props.children}
    </div>
  )
}

interface ZeroKeyProps {
  children: string,
}
