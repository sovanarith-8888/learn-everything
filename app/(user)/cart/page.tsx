"use client";
import { useAppSelector } from "@/redux/hooks";
import { selectProduct,selectTotalPrices } from "@/redux/feature/cart/cartSlice";


const Cart = () => {
  //const products =useAppSelector(state => state.cart.totalPrice)
  const products= useAppSelector(selectProduct)
  const totalPrices = useAppSelector(selectTotalPrices)


  return (
    <div>page {totalPrices}</div>
  )
}

export default Cart