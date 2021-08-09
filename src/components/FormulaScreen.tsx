import { useAppSelector } from "../app/hooks"
import { selectFormulaScreen } from "../features/formulaScreenSlice"


export const FormulaScreen = () => {
  const formulaScreen = useAppSelector(selectFormulaScreen)

  return (
    <div className="w-full h-6 text-orange-peel flex justify-end text-2xl">
      <span className="">{formulaScreen}</span>
    </div>
  )
}
