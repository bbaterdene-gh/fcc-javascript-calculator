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
  },
})

export const { addChar, reset } = formulaScreenSlice.actions
export const selectFormulaScreen = (state: RootState) => state.formulaScreen.value
export default formulaScreenSlice.reducer;