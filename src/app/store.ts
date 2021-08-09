import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import formulaScreenSlice from '../features/formulaScreenSlice';
import outputScreenSlice from '../features/outputScreenSlice';

export const store = configureStore({
  reducer: {
    formulaScreen: formulaScreenSlice,
    outputScreen: outputScreenSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
