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
      // find product by id
      const product = state.products.find(product => product.id === action.payload);
      state.totalPrice -= product?.price || 0;
      state.products = state.products.filter(product => product.id !== action.payload);

    }
  }
})

// export actin
export const {addToCart, removeFromCart} =cartSlice.actions;
export default cartSlice.reducer;


//create selector
export const selectProduct =(state: RootState) => state.cart.products;
export const selectTotalPrices = (state: RootState) => state.cart.totalPrice;