import { useAppSelector } from "../app/hooks"
import { selectOutputScreen } from "../features/outputScreenSlice"

export const OutputScreen = () => {
  const outputScreen = useAppSelector(selectOutputScreen)

  return (
    <div>
      <div className="w-full h-8 text-white flex justify-end text-3xl">
        <span className="">{outputScreen}</span>
      </div>
    </div>
  )
}
