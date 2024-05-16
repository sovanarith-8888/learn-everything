import CardComponent from "@/components/card/CardComponent";
import { Metadata, ResolvingMetadata } from "next";
import { title } from "process";
import { useAppSelector } from "@/redux/hooks";

type Props = {
  params: { slugId: string }
  searchParams: { [key: string]: string | string[] | undefined }
}
const END_POINT = "https://fakestoreapi.com/products/";

const getData = async (id: string)=>{
  const res = await fetch(`${END_POINT}${id}`,{cache: "no-store"});
  const data = await res.json();
  return data;
}

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  const id = params.slugId
 
  // fetch data
  const product = await fetch(`https://fakestoreapi.com/products/${id}`).then((res) => res.json())
 
  // optionally access and extend (rather than replace) parent metadata
  //const previousImages = (await parent).openGraph?.images || []
 
  return {
    title: product.title,
    description: product.description,
    openGraph: {
      images: product.image,
    },
  }
}
 

const page = async (props: Props) => {
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