import React from 'react'
import Title from '../../../components/Title'
import AddMark from '../../studentPage/buttons/AddMark'
import ViewUnits from './ViewUnits'
import AddUnits from './AddUnits'
import AddLecturer from './AddLecturer'

type Props = {}

function Lectures({}: Props) {
  return (
    <div className='space-y-7 mt-7'>
        <Title title='Lecturers'/>
        <AddLecturer/>

        <table className="  w-full mt-5  ">
        <thead className="text-secondary ">
        <tr className=" capitalize font-bold shadow-md ">
          <th className="text-start pl-5 ">Name</th>
          <th className='text-start'>Pf Number</th>
          <th className="text-start ">Units</th>
          <th className="text-start">Role</th>
          <th className="text-start"></th>
          <th className="text-start"></th>
          
        </tr>
      </thead>

      <tbody className=" ">
        <tr className=" w-full shadow-lg text-secondary  ">
          <td className="flex  flex-col py-[17px] pl-5">
            Angulu
          </td>
          
          <td>AD4536DGF</td>
          <td>
            <ViewUnits/>
          </td>
          <td>Lecturer</td>        
          <td></td>
          <td></td>
          <td>
            <button className='border border-secondary py-2 px-3 rounded-md'>Assaign a Role</button>
          </td>

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

export default Lectures