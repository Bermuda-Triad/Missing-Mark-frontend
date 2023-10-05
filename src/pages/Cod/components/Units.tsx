import React from 'react'
import Title from '../../../components/Title'
import AddUnits from './AddUnits'

type Props = {}

function Units({}: Props) {
  return (
    <div className='mt-5 mx-10'>
      <div className='my-5'>

      <Title title='Units'/>
      </div>
     <AddUnits />

     <table className=" w-full mt-5 bg-white font-Poppins ">
     <thead className="text-secondary ">
        <tr className=" capitalize font-bold border-b border-tableb flex flex-row justify-start gap-[280px] items-center">
          <th className="text-start pl-5 py-3 ">Unit Title</th>
          <th className='text-start py-3'> Unit Code</th>

          
         
         
          
        </tr>
      </thead>

      <tbody >
       <tr className='text-defaultgray  font-normal py-5 border-b border-tableb flex   flex-row  items-center justify-between'>
        <th className='text-start pl-5 py-5 font-normal'>Communication Skills</th>
        <th className='text-start bg-redx font-normal mr-[350px]'> COS 100 </th>
        <th></th>
     

        <th className='flex gap-10 pr-20'>
       
          <img src="/src/assets/edit-2.svg" className='  w-7 h-7' alt="" />
  
          <img src="/src/assets/trash.svg" className='w-7 h-7' alt="" />
       
        </th>

       </tr>

      

      </tbody>
     </table>
    </div>
  )
}

export default Units