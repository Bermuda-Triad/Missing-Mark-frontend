import React, { ChangeEvent, useReducer } from 'react'
import { useState } from 'react'



//validation
import { validation } from './validations/Validations'
import { Link, useNavigate } from 'react-router-dom'


type Props = {}

type Validation = {
  validate:(inputs:string) => boolean
}
type Inputs = {
  username:string;
  password:string;
  confirmPassword:string;
}

type State = {
  userName:String;
  password:string;
}

type Action =
  | { type: 'SET_USERNAME'; payload: string }
  | { type: 'SET_PASSWORD'; payload: string };


  // this is the reducer that will be used for validation
  // basically usereducer takes in to input
  // initial and the dispatch ie to call the function


function Login({}: Props) {

  const navigate = useNavigate()

  let vaStudent = new validation

    const [username,setUserName] = useState<Inputs["username"] >("")
    const [input,setInput] = useState<boolean>(true)
    const [password,setPassword] = useState<Inputs["password"]>()
    const [confirmPassword,setConfirmPassword] = useState<Inputs["confirmPassword"]>()
    

    let checker = {
      valid:'border-b border-defaultgray',
      invalid:'  border-b border-red'
    }
  //  validation
  function refReg(e){
    // setInput(vaStudent.validateStudent(username as string));
    // if the length si valid
    setUserName(e.target.value)
   
    
    if(username.length > 8) {
      setInput(true) 
      
      console.log(username.length)

    }
  //  else if(username.length  <3) setInput(true)
   else {
    setInput(false)
   }
    console.log(input)
    console.log(username)
  }
  

  return (
    <div className='w-[432px] '>
      <div className='mb-[55px]'>
      <h2 className='text-[36px] text-secondary font-[800] mb-[11px] font-Manrope'>Login</h2>
      <p className='text-[13.33px] text-defaultgray italic'>This only applies to students of Masinde Muliro University of Science and Techology</p>
      </div>

      <form action="" className='flex flex-col gap-[36px]'>
      

        <span className={`border-b border-defaultgray outline-none ${ input ? checker.valid : checker.invalid}` }><input type="password" className={` outline-none placeholder-secondary text-secondary text-[19.2px] w-full `}  placeholder='RF Number/ Reg Number' onChange={refReg}/>  </span>
        <span className='border-b border-defaultgray outline-none '><input type="password" className='border-none outline-none text-secondary placeholder-secondary  text-[19.2px] '  placeholder='Password'/>  </span>

        {/* <input type="text" >welcome</input> */}
       <input type="submit" value="Login" onClick={e => navigate("/student")} className='py-[10px] cursor-pointer bg-secondary text-white' />
      </form>

      <p className='my-[10px] text-[16px] flex items-center justify-between'>
       <h2>Forgot Password?  <a href="" className='text-red' >Click here</a>

       </h2>

       <Link to="/register" className='text-red'onClick={e => navigate("register")}> Register </Link>

       </p>
    </div>
  )
}

export default Login