import React from 'react'

type Props = {
    whosePage:string
    reg:string
}

function Profile({whosePage,reg}: Props) {
  return (
     <div className='flex items-center justify-center mr-3   gap-[14px]'>
{/* all fo this is from the db */}
 <div>
    <p className='text-[16px] font-extrabold capitalize text-secondary'>{whosePage}</p>
    <p className='text-[13.33px] text-secondary'>{reg}</p>
 </div>
 
 <div>
    <img src="src/assets/user.svg" alt="user image" className='bg-themeblue p-[8px] rounded-full' />
 </div>
      </div>
  )
}

export default Profile