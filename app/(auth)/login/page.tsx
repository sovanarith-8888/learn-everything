'use client'
import { Formik, Form, Field,  ErrorMessage } from 'formik';
import { FaEye } from "react-icons/fa";
import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import { FaEyeSlash } from "react-icons/fa";
import Link from "next/link";
import * as Yup from 'yup';
import { useState } from 'react';
import { BASE_URL } from '@/lib/constants';

type PropsType ={
  email: string;
  password1: string;
  password2: string;
  first_name: string;
  last_name: string;
}

const initialValues: PropsType = {
  email: "",
  password1: "",
  password2: "",
  first_name: "",
  last_name: "",
}
// 1upercase 1lowercase ...
const strongPasswordRegex = new RegExp("^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$"); 
const validationSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  password1: Yup.string().min(8,"password is too short").required('Required').matches(strongPasswordRegex,"please type strong password"),
  password2: Yup.string().min(8,"password is too short").oneOf([Yup.ref("password1")],"passwords must match").required("Required"),
  first_name: Yup.string().min(4, "More than 4 chareacter").required("Requreid"),
  last_name: Yup.string().required("Requreid")
})

const LoginPage = () => {
  const [isHidden,setIsHidden] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false)

  function passwordHidden(){
    setIsHidden(!isHidden);
  }
  const hanldeSubmit = (values: PropsType) => {
    setLoading(true);
    fetch(`${BASE_URL}api/user/register/`,{
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(values)
    })
      .then((res) => {
        // if(res.ok){
        //   setLoading(false);
        //   return res.json();
        // }
        return res.json()
      })
      .then((data) => {
        console.log(data);
        setLoading(false)

      })
      .catch(error =>{
        console.log(error)
        setLoading(false)
      })
  }
  if(loading){
    return <h1>Loading...</h1>
  }
  return (
    <main className='h-screen w-screen grid place-content-center bg-teal-400'>
      <h1 className='text-3xl'>Login an Account</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values,actions)=>{
          hanldeSubmit(values)
        }}
      >
        <Form className=' w-[400px] '>
          <div >
            <div className="mb-2 block">
              <Label htmlFor="first_name" value="Your first name" />
            </div>
            <Field id="first_name" name='first_name' type="text" placeholder="Your first name"  shadow />
            <ErrorMessage name='first_name' component="section"
            className='text-red-600'></ErrorMessage>
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="last_name" value="Your last name" />
            </div>
            <Field id="last_name" name='last_name' type="text" placeholder="Your last name"  shadow />
            <ErrorMessage name='last_name' component="section"
            className='text-red-600'></ErrorMessage>
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="email" value="Your email" />
            </div>
            <Field id="email" name='email' type="email" placeholder="name@flowbite.com"  shadow />
            <ErrorMessage name='email' component="section"
            className='text-red-600'></ErrorMessage>
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="password1" value="Your password" />
        
            </div>
            <Field id="password1" name='password1' type={isHidden? "text":"password"} placeholder='************'  shadow />
            {
              isHidden? <FaEye onClick={passwordHidden} /> : <FaEyeSlash onClick={passwordHidden} />
            }
            <ErrorMessage name='password1' component="section"
            className='text-red-600'></ErrorMessage>
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="password2" value="Repeat password" />
            </div>
            <Field id="password2" name='password2' type="password" placeholder='************'   shadow />
            <ErrorMessage name='password2' component="section"
            className='text-red-600'></ErrorMessage>
          </div>

          <Button className='mt-2' type="submit">Register new account</Button>
        </Form>
      </Formik>
    </main>
  )
}

export default LoginPage