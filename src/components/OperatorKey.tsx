
import { useAppDispatch, useAppSelector } from '../app/hooks'
import { addChar, removeLastChar, selectFormulaScreen } from '../features/formulaScreenSlice'
import { reset } from '../features/outputScreenSlice'

export const OperatorKey = (props: OperatorKeyProps) => {
  const dispatch = useAppDispatch()
  const formulaScreen = useAppSelector(selectFormulaScreen)
  const operatorKeys: {[key: string]: string} = {
    'x': '*',
    '/': '/',
    '+': '+',
    '-': '-',
  }

  const handleClick = () => {
    dispatch(reset())
    if ( formulaScreen ) {
      if ( !Object.values(operatorKeys).includes(formulaScreen.slice(-1)) ) {
        dispatch(addChar(operatorKeys[props.children]))
      } else {
        dispatch(removeLastChar())
        dispatch(addChar(operatorKeys[props.children]))
      }
    }
  }

  return (
    <div className="bg-dim-gray flex items-center justify-center" onClick={handleClick}>
      {props.children}
    </div>
  )
}

interface OperatorKeyProps {
  children: string,
}
