
import "./StudentDetails.css";

import AddMark from "../buttons/AddMark";
import Details from "../../../components/missingMarkForm/Details";
import "./StudentDetails.css"

type Props = {};

function StudentDetails({}: Props) {


  return (
    <main>
      
        <div
          className={`max-w-[1251px] min-h-[90vh] mx-auto bg-brightwhite px-[45px]  `}
        >
          {/*this is the top part */}
          <div className=" flex items-center justify-between py-[39px]">
            <h2 className="text-secondary text-[23.04px]">
              Marks Investigated
            </h2>

            <AddMark showForm={false} setShowForm={false}/>
           
          </div>
          
              
                <table className='border-separate border-b border-tableb   pl-8 text-[14px] bg-white '>
                  <thead className=' border-b border-red'>

                    <tr className='  capitalize font-bold border-b border-tableb '>
                      <th className="border-b border-tableb">Date</th>
                      <th className="border-b border-tableb" >Course Title</th>
                      <th className="border-b border-tableb">Course Code</th>
                      <th className="border-b border-tableb">Acedemic Year</th>
                      <th className="border-b border-tableb">Lecturer</th>
                      <th className="border-b border-tableb"></th>
                      <th className="border-b border-tableb"></th>
                    </tr>
                  </thead>
                  <tbody>

                    <tr className=' w-ful text-secondary border-b border-tableb'>
                      <td className=' border-b border-tableb flex flex-col py-[17px]'>
                        <p>10:20AM</p>
                        <p className=' text-dateblue'>16/2/2020</p>
                      </td>
                      <td className=' border-b border-tableb capitalize'>Digital Electronics</td>
                      <td className='border-b border-tableb uppercase'>BIT 410</td>
                      <td className="border-b border-tableb">2022/2023</td>
                      <td className='border-b border-tableb capitalize'>Dr. Angulu Ralph</td>

                      <td className="border-b border-tableb"></td>
                      <td className='border-b border-tableb font-[700]  capitalize text-themeblue'>pending...</td>
                    </tr>
                  </tbody>

            
   

    <tbody>
        <tr className="  w-ful text-secondary border-b border-tableb ">
          <td className=" border-b border-tableb flex flex-col py-[17px]">
            <p>10:20AM</p>
            <p className="text-dateblue">16/2/2020</p>
          </td>
          <td className="border-b border-tableb capitalize">Digital Electronics</td>
          <td className="uppercase border-b border-tableb">BIT 410</td>
          <td className="border-b border-tableb">2022/2023</td>
          <td className=" border-b border-tableb capitalize">Dr. Angul Ralph</td>

          <td className=" border-b border-tableb text-green font-[700]">Found</td>
          <td className="border-b border-tableb font-[700]  capitalize   ">
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
