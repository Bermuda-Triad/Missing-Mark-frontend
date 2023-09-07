import React from 'react'
import Profile from '../../../components/Profile'

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
     <Profile whosePage="Student" reg='SIT/B/00-00100/2021'/>
      {/* the student details */}
    </div>
  )
}

export default StudentHeader