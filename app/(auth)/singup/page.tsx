'use client'
import { Formik, Form, Field,  ErrorMessage } from 'formik';
import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import Link from "next/link";
import * as Yup from 'yup';

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
const validationSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  password1: Yup.string().min(8,"password is too short").required('Required'),
  password2: Yup.string().min(8,"password is too short").oneOf([Yup.ref("password1")],"passwords must match").required("Required"),
  first_name: Yup.string().min(4, "More than 4 chareacter").required("Requreid"),
  last_name: Yup.string().required("Requreid")
})
const SingupPage = () => {
  return (
    <main className='h-screen w-screen grid place-content-center bg-teal-400'>
      <h1 className='text-3xl'>Singup an Account</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values,actions)=>{
          console.log(values)
        }}
       
      >
        <section className=' w-[400px] '>
          <div >
            <div className="mb-2 block">
              <Label htmlFor="first_name" value="Your first name" />
            </div>
            <TextInput id="first_name" name='first_name' type="text" placeholder="Your first name" required shadow />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="last_name" value="Your last name" />
            </div>
            <TextInput id="last_name" name='last_name' type="text" placeholder="Your last name" required shadow />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="email" value="Your email" />
            </div>
            <TextInput id="email" name='email' type="email" placeholder="name@flowbite.com" required shadow />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="password1" value="Your password" />
            </div>
            <TextInput id="password1" name='password1' type="password" placeholder='************' required shadow />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="password2" value="Repeat password" />
            </div>
            <TextInput id="password2" name='password2' type="password" placeholder='************'  required shadow />
          </div>

          <Button className='mt-2' type="submit">Register new account</Button>
        </section>
      </Formik>
    </main>
  )
}

export default SingupPage