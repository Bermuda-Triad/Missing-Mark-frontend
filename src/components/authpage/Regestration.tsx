import React, { ChangeEvent, useReducer } from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

type Props = {}

type Validation = {
  validate:(inputs:string) => boolean
 
}
type Inputs = {
  username:string
  password:string
  confirmPassword:string
}

type State = {
  username:string;
  password:string;
  confirmPassword:string;
}

type Action =
  | { type: 'SET_USERNAME'; payload: string }
  | { type: 'SET_PASSWORD'; payload: string }
  |{ type:'SET_CONFIRM_PASSWORD'; payload:string};


  // this is the reducer that will be used for validation
  // basically usereducer takes in to input
  // initial and the dispatch ie to call the function

function formReducer(state:State,action:Action):State{

 
  switch(action.type){
    case 'SET_USERNAME':
      return{
        ...state,
        username :action.payload
      }
    case 'SET_PASSWORD':
      return{
        ...state,
        password:action.payload
      }
      case 'SET_CONFIRM_PASSWORD':
        return{
          ...state,
          confirmPassword:action.payload
        }
      default:
        return state
  }
}

function Regestration({}: Props) {
    
  const [passwordError,setPasswordError] = useState("")
    
    // defina the initial state

    let initialState:State = {
      username:"",
      password:'',
      confirmPassword:''
    }
    // the difination of the function

    const [state,dispatch] = useReducer(formReducer,initialState)

    // when any input of the inputs changes it should trigger the following code
    const navigate = useNavigate()

  

    function handleInputChange(e:ChangeEvent<HTMLInputElement>):void{

          // then it should change the input
          const {name,value} = e.target

          dispatch({
            type:`SET_${name.toUpperCase()}`,payload:value
          })


    }
    const handleRegistration = (e)=>
    {
      e.preventDefault()
      if(state.password !== state.confirmPassword) {
        state.confirmPassword = ""
        setPasswordError("The passwords do not match")
    
    }
    else setPasswordError("")
    console.log(passwordError)
      console.log(state)
      
    }
  
  

  return (
    <div className='w-[432px] '>
      <div className='mb-[55px]'>
      <h2 className='text-[36px] text-secondary font-[800] mb-[11px] font-Manrope'>Registration</h2>
      <p className='text-[13.33px] text-defaultgray italic'>This only applies to students of Masinde Muliro University of Science and Techology</p>
      </div>

      <form action="" className='flex flex-col gap-[36px]'>
        <span className='border-b border-defaultgray outline-none '><input 
        value={state.username}
        name='username'
        onChange={handleInputChange}
        type="text" className='border-none outline-none text-secondary text-[19.2px] '  placeholder='Reg Number'
       


        /> 
         </span>

        <span className='border-b border-defaultgray outline-none '>
          <input type="password" className='border-none outline-none text-secondary text-[19.2px] '  placeholder='Password' name='password'  onChange={handleInputChange} />  </span>
        <span className='border-b border-defaultgray outline-none '>
          <input type="password" className='border-none outline-none text-secondary  text-[19.2px] '  placeholder='Confirm Password' name='confirm_password'  onChange={handleInputChange} />  </span>

        <p className='text-red italic '>{passwordError}</p>
       <input type="submit" value="Register" className='py-[10px] cursor-pointer bg-secondary text-white' onClick={
        () => {
          handleRegistration
          navigate("/student")
        }
       } />
      </form>

      <p className='my-[10px] text-[16px]'>Already have an account?  <button  className='text-red' onClick={() => navigate("/")} >Login</button></p>
    </div>
  )
}

export default Regestration