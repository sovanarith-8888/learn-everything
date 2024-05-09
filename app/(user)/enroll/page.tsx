'use client'
import React, { useState } from 'react'
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { increment,decrement,incrementByAmount } from '@/redux/feature/counter/counterSlice';

const Enroll = () => {
  const count = useAppSelector((state)=>state.counter.value);
  const [amount, setAmount] = useState<number>(10)
  const dispatch = useAppDispatch();
  
  return (
    <main className='bg-teal-600 p-4'>
      Welcome to guide - amount {amount}
      <h1>{count}</h1>
      <button
        onClick={()=> dispatch(increment())}
        className='btn border border-1 px-4 py-1 rounded-md'>+</button>{" "}
      <button className='btn border border-1 px-4 py-1 rounded-md'
        onClick={()=> dispatch(decrement())}>-</button>{" "}
      <button className='btn border border-emerald-300 border-1 px-4 py-1 rounded-md'
        onClick={()=> dispatch(incrementByAmount(9))}
      >Increase my abount {amount}</button>{" "}
    </main>
  )
}

export default Enroll