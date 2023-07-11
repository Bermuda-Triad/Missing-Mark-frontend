import React, { ChangeEvent, useReducer } from 'react'
import { useState } from 'react'

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
  userName:String;
  password:string;
}

type Action =
  | { type: 'SET_USERNAME'; payload: string }
  | { type: 'SET_PASSWORD'; payload: string };


  // this is the reducer that will be used for validation
  // basically usereducer takes in to input
  // initial and the dispatch ie to call the function

function formReducer(state:State,action:Action):State{
  switch(action.type){
    case 'SET_USERNAME':
      return{
        ...state,
        userName :action.payload
      }
    case 'SET_PASSWORD':
      return{
        ...state,
        password:action.payload
      }
      default:
        return state
  }
}

function Regestration({}: Props) {
    const [username,setUserName] = useState<Inputs["username"]>()
    const [password,setPassword] = useState<Inputs["password"]>()
    const [confirmPassword,setConfirmPassword] = useState<Inputs["confirmPassword"]>()
    
    // defina the initial state

    let initialState:State = {
      userName:"",
      password:''
    }
    // the difination of the function

    const [state,dispatch] = useReducer(formReducer,initialState)

    // when any input of the inputs changes it should trigger the following code
    function handleInputChange(e:ChangeEvent<HTMLInputElement>):void{
          // then it should change the input
          const {name,value} = e.target
          dispatch({
            type:`SET_${name.toUpperCase()}`,payload:value
          })
    }
  
  

  return (
    <div className='w-[432px] '>
      <div className='mb-[55px]'>
      <h2 className='text-[36px] text-secondary font-[800] mb-[11px] font-Manrope'>Registration</h2>
      <p className='text-[13.33px] text-defaultgray italic'>This only applies to students of Masinde Muliro University of Science and Techology</p>
      </div>

      <form action="" className='flex flex-col gap-[36px]'>
        <span className='border-b border-defaultgray outline-none '><input 
        value={state.userName}
        onChange={handleInputChange}
        type="text" className='border-none outline-none text-secondary text-[19.2px] '  placeholder='Reg Number'
       


        />  </span>

        <span className='border-b border-defaultgray outline-none '><input type="password" className='border-none outline-none text-secondary text-[19.2px] '  placeholder='Password'/>  </span>
        <span className='border-b border-defaultgray outline-none '><input type="password" className='border-none outline-none text-secondary  text-[19.2px] '  placeholder='Confirm Password'/>  </span>

        {/* <input type="text" >welcome</input> */}
       <input type="submit" value="Register" className='py-[10px] cursor-pointer bg-secondary text-white' />
      </form>

      <p className='my-[10px] text-[16px]'>Already have an account?  <a href="" className='text-red' >Login</a></p>
    </div>
  )
}

export default Regestration