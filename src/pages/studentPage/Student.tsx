import React from 'react'
import StudentHeader from './studentcomponents/StudentHeader'
import StudentDetails from './studentcomponents/StudentDetails'

type Props = {}

function Student({}: Props) {
  return (
<main className='flex items-center justify-center mx-auto  bg-lightGray'>

<div className='w-full h-full '>

  
{/* student header component */}
<div className='bg-white drop-shadow-lg'>

<StudentHeader/>
</div>
{/* student header compontnet */}
<StudentDetails/>


   </div>
</main>
  )
}

export default Student