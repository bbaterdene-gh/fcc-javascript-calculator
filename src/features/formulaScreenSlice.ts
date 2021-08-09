import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../app/store";

export const formulaScreenSlice = createSlice({
  name: 'formulaScreen',
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
    removeLastChar: (state) => {
      if (state.value) state.value = state.value.slice(0, -1)
    },
  },
})

export const { addChar, reset, removeLastChar } = formulaScreenSlice.actions
export const selectFormulaScreen = (state: RootState) => state.formulaScreen.value
export default formulaScreenSlice.reducer;