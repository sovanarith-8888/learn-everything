import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '@/redux/store';

type CounterState = {
  value: number
}

const initialState: CounterState = {
  value: 11
}

export const cunterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: state => {
      state.value += 1;
    },
    decrement: state => {
      state.value -= 1;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload
    }
  }
})

export const {increment,decrement,incrementByAmount} = cunterSlice.actions;
export const selectCount = (state: RootState) => state.counter.value;
export default cunterSlice.reducer;