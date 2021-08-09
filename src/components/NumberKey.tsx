import { useAppDispatch } from "../app/hooks"
import { addChar as addCharToFormula } from "../features/formulaScreenSlice"
import { addChar as addCharToOutput } from "../features/outputScreenSlice"

export const NumberKey = (props: NumberKeyProps) => {
  const dispatch = useAppDispatch()

  const handleClick = () => {
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
