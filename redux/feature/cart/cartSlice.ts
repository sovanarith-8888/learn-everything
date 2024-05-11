import { createSlice,PayloadAction } from "@reduxjs/toolkit";
import { PropsType,ProductType } from "@/lib/definition";
import type { RootState } from "@/redux/store";

const initialState = {
  products: [] as PropsType[],
  totalPrice: 0
}

// type CartState = {
//   products: PropsType[]
// }
// const initialState: CartState = {
//   products: []
// }

const cartSlice =createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<PropsType>) => {
      state.products.push(action.payload)
      state.totalPrice += action.payload.price
    },
    removeFromCart: (state, action: PayloadAction<number>) => {
      state.products = state.products.filter(product => product.id !== action.payload);
    }
  }
})