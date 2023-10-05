import React from 'react'
import Profile from '../../../components/Profile'
import Title from '../../../components/Title'
import Details from '../../../components/missingMarkForm/Details'

type Props = {}

function AllApps({}: Props) {
  return (
    <section className="flex-1  flex flex-col h-full  px-4">
    

    <div className="flex items-center justify-between mt-4">
      <div className="flex items-center justify-start gap-2  ">
        <Title title="Pending Marks" />
        <h3 className="bg-red text-white rounded-full px-2 text-[.7rem]">
          200
        </h3>
      </div>

      <div className="flex gap-5 ">
        <select name="" id="" className="px-2 text-defaultgray rounded-md">
          <option value="" className="">
            BIT 314
          </option>
        </select>

        <select name="" id="" className="px-2 text-defaultgray rounded-md">
          <option value="">2021/2031</option>
        </select>

        <div className="flex justify-center items-center border border-defaultgray px-4 rounded-md">
          <input
            type="text"
            placeholder="search"
            className="border-none outline-none text-defaultgray placeholder-defaultgray py-2"
          />

          <button>
            <img src="src/assets/carbon_search.svg" className="" alt="" />
          </button>
        </div>
      </div>
    </div>

    {/* table */}
    <table className=" table-auto mt-5  ">
      <thead className="text-secondary ">
        <tr className=" capitalize font-bold border-b border-tableb ">
          <th className="text-start pl-5 ">Date</th>
          <th className='text-start'>Reg Number</th>
          <th className="text-start ">Course Title</th>
          <th className="text-start">Course Code</th>
          <th className="text-start">Acedemic Year</th>
          <th className="text-start">status</th>
          
        </tr>
      </thead>

      <tbody className=" ">
        <tr className=" w-full   text-secondary border-b border-tableb ">
          <td className="flex  flex-col py-[17px] pl-5">
            <p>10:20AM </p>
            <p className="text-dateblue">16/2/2020</p>
          </td>
          <td className=" capitalize">Digital Electronics</td>
          <td className="uppercase">BIT 410</td>
          <td>2022/2023</td>
          <td className="capitalize">Dr. Angulu Ralph</td>
        
          <td className='text-green font-bold'>Found</td>
          <td>
            <Details setDetails={true}/>
          </td>

        </tr>
      </tbody>
    </table>
  </section>
  )
}

export default AllApps