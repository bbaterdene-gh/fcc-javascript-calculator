import { AllClearKey } from "./AllClearKey"
import { DotKey } from "./DotKey"
import { EqualKey } from "./EqualKey"
import { NumberKey } from "./NumberKey"
import { OperatorKey } from "./OperatorKey"
import { ZeroKey } from "./ZeroKey"

export const Keys = () => {
  return (
    <div className="text-white font-share-tech-mono w-full h-full grid grid-cols-4 grid-rows-5 text-xl gap-0.25">
      <AllClearKey />
      <OperatorKey id="divide">/</OperatorKey>
      <OperatorKey id="multiply">x</OperatorKey>
      <NumberKey id="seven">7</NumberKey>
      <NumberKey id="eight">8</NumberKey>
      <NumberKey id="nine">9</NumberKey>
      <OperatorKey id="subtract">-</OperatorKey>
      <NumberKey id="four">4</NumberKey>
      <NumberKey id="five">5</NumberKey>
      <NumberKey id="six">6</NumberKey>
      <OperatorKey id="add">+</OperatorKey>
      <NumberKey id="one">1</NumberKey>
      <NumberKey id="two">2</NumberKey>
      <NumberKey id="three">3</NumberKey>
      <EqualKey />
      <ZeroKey id="zero">0</ZeroKey>
      <DotKey>.</DotKey>
    </div>
  )
}
