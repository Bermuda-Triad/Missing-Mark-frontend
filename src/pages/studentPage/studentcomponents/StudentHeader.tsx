import React from 'react'

type Props = {}

function StudentHeader({}: Props) {
  return (
    <div className=' py-[17px] mx-auto flex flex-row justify-between items-center max-w-[1251px]'>
      <div className='flex flex-row items-center justify-start text-[16px] gap-[14px]'>
        {/* logo */}
        <img src="src/assets/mmustlogo.svg" className='h-[59px] w-[67px]' alt="" />
        <div className=' text-title'>
            <p>Student Marks</p>
            <p>Investigation Portal</p>
        </div>
      {/* logo */}
      </div>

      {/* the student details goes here */}
      <div className='flex items-center justify-center mr-3   gap-[14px]'>
{/* all fo this is from the db */}
 <div>
    <p className='text-[16px] font-extrabold capitalize text-secondary'>Student</p>
    <p className='text-[13.33px] text-secondary'>SIT/B/00-00100/2021</p>
 </div>
 
 <div>
    <img src="src/assets/user.svg" alt="user image" className='bg-themeblue p-[8px] rounded-full' />
 </div>
      </div>
      {/* the student details */}
    </div>
  )
}

export default StudentHeader