import React, { useState } from "react";
import "./StudentDetails.css";
import ReactTable from "react-table";
import MissingMark from "../../../components/missingMarkForm/MissingMark";
import AddMark from "../buttons/AddMark";
import Details from "../../../components/missingMarkForm/Details";

type Props = {};

function StudentDetails({}: Props) {


  return (
    <main>
      
        <div
          className={`max-w-[1251px] min-h-[90vh] mx-auto bg-white px-[45px]  `}
        >
          {/*this is the top part */}
          <div className=" flex items-center justify-between py-[39px]">
            <h2 className="text-secondary text-[23.04px]">
              Marks Investigated
            </h2>

            <AddMark showForm={false} setShowForm={false}/>
           
          </div>
          {/* this is the top part */}

          {/* containing the marks */}
    

           
                 
                
              {/* this is the top part */}

              {/* containing the marks */}
              
                <table className='table-auto text-[14px]'>
                  <thead className=''>

                    <tr className=' capitalize font-bold '>
                      <th>Date</th>
                      <th>Course Title</th>
                      <th>Course Code</th>
                      <th>Acedemic Year</th>
                      <th>Lecturer</th>
                      <th></th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>

                    <tr className=' w-ful text-secondary'>
                      <td className='flex flex-col py-[17px]'>
                        <p>10:20AM</p>
                        <p className='text-dateblue'>16/2/2020</p>
                      </td>
                      <td className=' capitalize'>Digital Electronics</td>
                      <td className='uppercase'>BIT 410</td>
                      <td>2022/2023</td>
                      <td className='capitalize'>Dr. Angulu Ralph</td>

                      <td></td>
                      <td className='font-[700]  capitalize text-themeblue'>pending...</td>
                    </tr>
                  </tbody>

            
   

    <tbody>
        <tr className=" w-ful text-secondary ">
          <td className="flex flex-col py-[17px]">
            <p>10:20AM</p>
            <p className="text-dateblue">16/2/2020</p>
          </td>
          <td className=" capitalize">Digital Electronics</td>
          <td className="uppercase">BIT 410</td>
          <td>2022/2023</td>
          <td className="capitalize">Dr. Angulu Ralph</td>

          <td className="text-green font-[700]">Found</td>
          <td className="font-[700]  capitalize   ">
            <Details setDetails={true} />
          </td>
        </tr>
      </tbody>
      
      <tbody>
        <tr className=" w-ful text-secondary ">
          <td className="flex flex-col py-[17px]">
            <p>10:20AM</p>
            <p className="text-dateblue">16/2/2020</p>
          </td>
          <td className=" capitalize">Digital Electronics</td>
          <td className="uppercase">BIT 410</td>
          <td>2022/2023</td>
          <td className="capitalize">Dr. Angulu Ralph</td>

          <td className="text-red font-[700]">Not Found</td>
          <td className="font-[700]  capitalize   ">
            <Details setDetails={false} />
          </td>
        </tr>
      </tbody>

   </table>
         
   

      </div>
    </main>
  );
}

export default StudentDetails;
