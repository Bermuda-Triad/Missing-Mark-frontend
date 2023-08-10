import React from 'react'
import "./form.css"

type Props = {}

function MissingMark({}: Props) {
  
  return (
    <div className='w-full h-screen flex flex-col items-center justify-center bg-lightGray'>
       <form action="" className='py-[60px] px-[30px] bg-white text-[16px] '>
        <h2 className='text-defaultgray font-[700] text-[20px] mb-[22px] uppercase'>Add Unit</h2>
        <div className='flex flex-col  '>

        <label htmlFor="full name" className='text-defaultgray capitalize'> Unit Title</label>
        <input type="text" placeholder='full name' className='py-[12px] text-[13px] px-[8px] outline-none text-secondary' />

        <label htmlFor="pf-number" className='text-defaultgray capitalize mt-[28px]'>Unit Code</label>
        <input type="text" placeholder='pf number' className='py-[12px] px-[8px] outline-none text-secondary' />

        
        <input type="submit" value={"SUBMIT"} className='bg-defaultgray text-whit  text-[14px] py-[12px] text-white font-[500] px-[8px] mt-[28px]'/>
        </div>
       </form>
    </div>
  )
}

export default MissingMark