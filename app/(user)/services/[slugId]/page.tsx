import CardComponent from "@/components/card/CardComponent";
import { title } from "process";

type PropsParam = {
  params:{
    slugId: number;
  },
  searchParams:any
  
}

const END_POINT = "https://fakestoreapi.com/products/";

const getData = async (id: number)=>{
  const res = await fetch(`${END_POINT}${id}`,{cache: "no-store"});
  const data = await res.json();
  return data;
}

const page = async (props: PropsParam) => {
  const data = await getData(props.params.slugId);
  console.log(props.params)
  console.log(props.searchParams)
  const singleProduct = {
    title: data?.title || "No title",
    description: data?.description || "No description",
    image: data?.image || "No image upload"
  }
  return (
    <>
    
      <CardComponent {...singleProduct}/>
  
    </>
  )
}

export default page