import { FormulaScreen } from "./FormulaScreen"

export const Calculator = () => {
  return (
    <div className="w-80 h-96 bg-black m-auto border-corn-flower-blue border-2 p-1">
      <div className="font-digital-7" style={{ fontFamily: 'Digital 7'}}>
        <FormulaScreen />
      </div>
    </div>
  )
}
