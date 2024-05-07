'use client'
import { Formik, Form, Field, ErrorMessage } from "formik"
import { Label, TextInput, Textarea } from "flowbite-react";
import * as Yup from "yup"
import style from "./style.module.css"
import { useState } from "react";
type CategoryType = {
  name: string;
  icon: string;
}
type ProductPostType = {
  category: CategoryType,
  name: string;
  desc: string;
  image: string;
  price: number,
  quantity: number
}

const initialValues = {
  categoryName: "",
  categoryIcon: "",
  name: "",
  desc: "",
  image: "",
  price: 0,
  quantity: 0,
  file: null
}
const FILE_SIZE = 1024 * 1024 * 3; //2MB
const SUPPORTED_FORMATS = [
  "image/jpg",
  "image/jped",
  "image/png",
  "image/gif"
]
const productPost = {
  categoryName: "",
  categoryIcon: null,
  name: "",
  desc: "",
  image: "",
  price: 0,
  quantity: 0,
  file: null
}

const validationSchema = Yup.object().shape(
  {
    categoryName: Yup.string().required("Category product name needed"),
    categoryIcon: Yup.string().required("reqired"),
    name: Yup.string().required("required"),
    desc: Yup.string().nullable(),
    image: Yup.string().required("require"),
    price: Yup.number().required("require"),
    quantity: Yup.number().required("required"),
    file: Yup.mixed().test("fileSize","File size is too large",(value: any) => {
      if(!value){
        return true
      }
      return value.size <= FILE_SIZE
    })
    .test("fileFormat","Unsported file format",(value: any)=> {
      if(!value) {
        return true;
      }
      return SUPPORTED_FORMATS.includes(value.type)
    })
    .required("Required")
  }
)
const Product = () => {
  return (
    <main className={`${style.container}`}>
      <Formik 
      validationSchema={validationSchema}
      initialValues={initialValues}
      onSubmit={(value) => {
        
      }}>
        {
          ({setFieldValue})=>{
            console.log(setFieldValue)
            return (
              <Form className={`${style.form}`}>
            <h1 className={`${style.h1}`}>Products</h1>
            {/* category */}
            <div className="mt-2">
              <div className="mb-2 block">
                <Label htmlFor="name" color="gray" value="Category" />
              </div>
              <Field as={TextInput } type='text' id="categoryName" name="categoryName" placeholder="Create Category "  color="gray" />
              <ErrorMessage name="categoryName" component="section" 
              className="text-red-700"></ErrorMessage>
            </div>
            {/* category icon*/}
            <div className="mt-2">
              <div className="mb-2 block">
                <Label htmlFor="name" color="gray" value="Category Icon" />
              </div>
              <Field as={TextInput } type='file' id="categoryIcon" setFieldValue={setFieldValue} component={CustomInput} name="categoryIcon" placeholder="Create Category Icon"  color="gray" />
              <ErrorMessage name="categoryIcon" component="section" 
              className="text-red-700"></ErrorMessage>
            </div>
            {/* product name */}
            <div className="mt-2">
              <div className="mb-2 block">
                <Label htmlFor="name" color="gray" value="Product Name" />
              </div>
              <Field as={TextInput } id="name" name="name" placeholder="Input Product Name"  color="gray" />
              <ErrorMessage name="name" component="section" 
              className="text-red-700"></ErrorMessage>
            </div>
            {/* product price */}
            <div className="mt-2">
              <div className="mb-2 block">
                <Label htmlFor="name" color="gray" value="Product price $" />
              </div>
              <Field as={TextInput } type='number' id="price" name="price" placeholder="Input Product Price $"  color="gray" />
              <ErrorMessage name="price" component="section" 
              className="text-red-700"></ErrorMessage>
            </div>
            
            {/* quantity */}
            <div className="mt-2">
              <div className="mb-2 block">
                <Label htmlFor="name" color="gray" value="quantity" />
              </div>
              <Field as={TextInput } type='number' id="quantity" name="quantity" placeholder="Product Quanity "  color="gray" />
              <ErrorMessage name="quantity" component="section" 
              className="text-red-700"></ErrorMessage>
            </div>
            {/* descrition */}
            <div className="mt-2">
              <div className="mb-2 block">
                <Label htmlFor="desc" color="gray" value="Description" />
              </div>
              <Field as={Textarea } id="desc" name="desc" placeholder="Description"  color="gray" />
              <ErrorMessage name="desc" component="section" 
              className="text-red-700"></ErrorMessage>
            </div>
            <button type="submit" className={`${style.btn}`}>Create</button>
          </Form>
            )
           
          }
        }

      </Formik>
    </main>
  )
}

const CustomInput = (props:any) => {
  console.log(props)
  const [imagePreview,setImagePreview] = useState<string>("");
  const handleUploadFile = (e:any) => {
    console.log("Event target: ",e.target.files[0])
    const file = e.target.files[0];
    const localUrl = URL.createObjectURL(file)
    console.log(localUrl)
    setImagePreview(localUrl)
  }
  return (
    <div>
      <input type="file" onChange={(e)=> handleUploadFile(e)} />
      {
        imagePreview ? <img className="w-[200px] h-[200px] border p-2 bottom-4 object-contain" src={imagePreview} alt="preview" />: <DefaultImage/>
      }
    </div>
  )
}

function DefaultImage(){
  return (
    <img width={"30px"} className="w-[200px] h-[200px] border p-2 bottom-4" src="https://static.vecteezy.com/system/resources/thumbnails/008/695/917/small/no-image-available-icon-simple-two-colors-template-for-no-image-or-picture-coming-soon-and-placeholder-illustration-isolated-on-white-background-vector.jpg" alt="no-image" />
  )
}
export default Product