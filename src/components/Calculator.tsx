import { FormulaScreen } from "./FormulaScreen"
import { Keys } from "./Keys"
import { OutputScreen } from "./OutputScreen"

export const Calculator = () => {
  return (
    <div className="w-80 h-96 bg-black m-auto border-corn-flower-blue border-2 p-1 flex flex-col">
      <div className="font-digital-7" style={{ fontFamily: 'Digital 7'}}>
        <FormulaScreen />
        <OutputScreen />
      </div>
      <Keys />
    </div>
  )
}
