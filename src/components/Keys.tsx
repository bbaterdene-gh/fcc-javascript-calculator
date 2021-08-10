import { AllClearKey } from "./AllClearKey"
import { DotKey } from "./DotKey"
import { NumberKey } from "./NumberKey"
import { OperatorKey } from "./OperatorKey"
import { ZeroKey } from "./ZeroKey"

export const Keys = () => {
  return (
    <div className="text-white font-share-tech-mono w-full h-full grid grid-cols-4 grid-rows-5 text-xl gap-0.25">
      <AllClearKey />
      <OperatorKey>/</OperatorKey>
      <OperatorKey>x</OperatorKey>
      <NumberKey>7</NumberKey>
      <NumberKey>8</NumberKey>
      <NumberKey>9</NumberKey>
      <OperatorKey>-</OperatorKey>
      <NumberKey>4</NumberKey>
      <NumberKey>5</NumberKey>
      <NumberKey>6</NumberKey>
      <OperatorKey>+</OperatorKey>
      <NumberKey>1</NumberKey>
      <NumberKey>2</NumberKey>
      <NumberKey>3</NumberKey>
      <div className="bg-prussian-blue row-span-2 flex items-center justify-center">=</div>
      <ZeroKey>0</ZeroKey>
      <DotKey>.</DotKey>
    </div>
  )
}
