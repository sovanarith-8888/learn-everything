'use client';

import CardProduct from "@/components/card/CardProduct";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useAppSelector } from "@/redux/hooks";
const END_POINT = "https://fakestoreapi.com/products/";

const Page = () => {
  const [products, setProducts] = useState([])
  const router = useRouter();
  const carts = useAppSelector(state=> state)
  console.log("this is global state ", carts)
  useEffect(()=>{
    fetch(END_POINT)
      .then(res=> res.json())
      .then(data => setProducts(data));

  },[]);

  return (
    <>
    <div className="flex ">
      {
        
        products.map((product: any,index) =>{
          console.log("log product",product.title)
          return <CardProduct onClick={()=> router.push(`/services/${product.id}`)}  key={index} id={product.id} title={product.title} price={product.price} image={product.image}/>
        })
      }
    </div>
   
    </>
    
  )
}

export default Page