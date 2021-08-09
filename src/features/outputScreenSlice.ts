import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../app/store";

export const outputScreenSlice = createSlice({
  name: 'ouputScreen',
  initialState: {
    value: '0',
  },
  reducers: {
    addChar : (state, action: PayloadAction<string>) => {
      if ( state.value === '0' ) {
        state.value = action.payload
      } else {
        state.value += action.payload
      }
    },
    reset : (state) => {
      state.value = '0'
    },
  },
})

export const { addChar, reset } = outputScreenSlice.actions
export const selectOutputScreen = (state: RootState) => state.outputScreen.value
export default outputScreenSlice.reducer;