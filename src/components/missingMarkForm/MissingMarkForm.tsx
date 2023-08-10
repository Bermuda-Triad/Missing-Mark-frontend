import React from 'react'
import "./form.css"

type Props = {}

function MissingMarkForm({}: Props) {
  return (
    <div className='w-full h-screen flex flex-col items-center justify-center bg-lightGray'>
       <form action="" className='py-[60px] px-[30px] bg-white text-[16px] '>
        <h2 className='text-defaultgray font-[700] text-[20px] mb-[22px] uppercase'>Add Lecturer</h2>
        <div className='flex flex-col gap-[16px] '>

        <label htmlFor="full name" className='text-defaultgray uppercase'> Full Name</label>
        <input type="text" placeholder='full name' className='py-[12px] text-[13px] px-[8px]' />

        <label htmlFor="pf-number" className='text-defaultgray uppercase'>pf number</label>
        <input type="text" placeholder='pf number' className='py-[12px] px-[8px]' />

        <label htmlFor="Units" className='text-defaultgray uppercase'>Units</label>
        <select name="units" id="units" className='py-[12px] px-[8px]' >
          <option value="">one</option>
          <option value="">two</option>
          <option value="">three</option>
        </select>

        <label htmlFor="Role" className='text-defaultgray uppercase'>Role</label>
        <select name="role" id="" className='py-[12px] px-[8px]'>
          <option value="Lecture">Lecture</option>
          <option value="">Lecturer</option>
        </select>

        <input type="submit" value={"SUBMIT"} className='bg-defaultgray text-whit  text-[14px] py-[12px] text-white font-[500] px-[8px]'/>
        </div>
       </form>
    </div>
  )
}

export default MissingMarkForm