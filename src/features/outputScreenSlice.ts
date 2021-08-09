import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../app/store";

export const outputScreenSlice = createSlice({
  name: 'ouputScreen',
  initialState: {
    value: '',
  },
  reducers: {
    addChar : (state, action: PayloadAction<string>) => {
      state.value += action.payload
    },
    reset : (state) => {
      state.value = ''
    },
  },
})

export const { addChar, reset } = outputScreenSlice.actions
export const selectOutputScreen = (state: RootState) => state.outputScreen.value
export default outputScreenSlice.reducer;