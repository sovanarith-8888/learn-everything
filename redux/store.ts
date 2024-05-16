import { configureStore } from '@reduxjs/toolkit';
import counterSlice from './feature/counter/counterSlice';
import cartSlice from './feature/cart/cartSlice';
import  userProfileSlice  from './feature/userProfile/userProfileSlice';
// Create store
export const makeStore = () => {
  return configureStore({
    reducer:{
      counter: counterSlice,
      cart: cartSlice,
      userProfile: userProfileSlice
    }
  })
}

// Infer the type of makestore
export type AppStore = ReturnType<typeof makeStore>;
// INfer the RootStore and Appdispath type fromthe store itselft
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
