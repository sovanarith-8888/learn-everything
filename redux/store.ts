import { configureStore } from '@reduxjs/toolkit';
import counterSlice from './feature/counter/counterSlice';
// Create store
export const makeStore = () => {
  return configureStore({
    reducer:{
      counter: counterSlice
    }
  })
}

// Infer the type of makestore
export type AppStore = ReturnType<typeof makeStore>;
// INfer the RootStore and Appdispath type fromthe store itselft
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
