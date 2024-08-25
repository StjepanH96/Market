import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import productsReducer from './reducers/index';

export const productsStore = configureStore({
  reducer: {
    products: productsReducer,
  },
});

export type AppDispatch = typeof productsStore.dispatch;
export type RootState = ReturnType<typeof productsStore.getState>;
export type AppStore = typeof productsStore;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
