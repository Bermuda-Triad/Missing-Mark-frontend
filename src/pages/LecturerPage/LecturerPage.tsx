import React, { useState } from "react";
import { Link } from "react-router-dom";
import Title from "../../components/Title";
import Profile from "../../components/Profile";
import Details from "../../components/missingMarkForm/Details";

type Props = {};

function LecturerPage({}: Props) {
  const [show, setShow] = useState({
    pendingMarks: true,
    marksFound: false,
    marksNotFound: false,
  });

  return (
      <div className="px-4 pt-5 flex gap-6  items-start justify-center ">
        {/* left side */}
        <section className="h-screen  border-r border-lightGray max-w-[14rem] px-4">
          <div className="flex gap-[6rem]">
            <img
              src="src/assets/mmustlogo.svg"
              className="h-[59px] w-[67px]"
              alt=""
            />

            <button className=" ng-red">
              <img
              src="src/assets/menu.svg"
              alt=""
              className="w-[20px]h-[30px]"
            />
          </button>
        </div>

        <div className="flex flex-col gap-[2rem] text-1xl font-Poppins text-center  mx-1 pt-4">
          <button
            className={`text-start py-2  w-14rem] pl-5  ${
              show.pendingMarks
                ? "text-themeblue bg-lightGray"
                : "text-defaultgray"
            }`}
            onClick={() => {
              console.log(show);
              setShow({
                pendingMarks: true,
                marksFound: false,
                marksNotFound: false,
              });
            }}
          >
            X Pending Marks
          </button>
          <button
            className={`text-start py-2  w-14rem] pl-5  ${
              show.marksFound
                ? "text-themeblue bg-lightGray"
                : "text-defaultgray"
            }`}
            onClick={() => {
              setShow({
                pendingMarks: false,
                marksFound: true,
                marksNotFound: false,
              });
              console.log(show);
            }}
          >
            X Marks Found
          </button>
          <button
            className={`text-start py-2  w-14rem] pl-5  ${
              show.marksNotFound
                ? "text-themeblue bg-lightGray"
                : "text-defaultgray"
            }`}
            onClick={() => {
              setShow({
                pendingMarks: false,
                marksFound: false,
                marksNotFound: true,
              });
            }}
          >
            X Marks Not Found
          </button>
        </div>

        <div></div>
      </section>
      {/* left side */}

      {/* right side */}
      <section className="flex-1  flex flex-col h-full  px-4">
        <div className="flex justify-between items-center border-b border-defaultgray py-6 pr-[4.3rem]">
          <div className="text-etrabold">
            <Title title="Missing Mark Portal" />
          </div>
          {/* the drop down */}
          <Profile whosePage="COD" reg="josephat" />
        </div>

        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center justify-start gap-2  ">
            <Title title={
              show.marksFound ? "Marks Found" :show.pendingMarks ? "Pending Marks":"Marks Not Found"
            } />
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
        <table className=" table-auto mt-5 ">
          <thead className="text-secondary ">
            <tr className=" capitalize font-bold  ">
              <th className="text-start pl-5 ">Date</th>
              <th className="text-start ">Course Title</th>
              <th className="text-start">Course Code</th>
              <th className="text-start">Acedemic Year</th>
              <th className="text-start">Lecturer</th>
              <th className={`${show.marksFound ? "" : "hidden"} text-start`}>
                Date Found
              </th>
            </tr>
          </thead>

          <tbody className=" ">
            <tr className=" w-full shadow-lg text-secondary  ">
              <td className="flex  flex-col py-[17px] pl-5">
                <p>10:20AM </p>
                <p className="text-dateblue">16/2/2020</p>
              </td>
              <td className=" capitalize">Digital Electronics</td>
              <td className="uppercase">BIT 410</td>
              <td>2022/2023</td>
              <td className="capitalize">Dr. Angulu Ralph</td>
              <td className={` ${show.marksFound ? "" : "hidden"} text-start`}>
                22/2/2021
              </td>

              <td className={`text-white font-[700]  `}>
                {show.marksFound ? (
                  <Details setDetails={true} />
                ) : (
                  <Details setDetails={false} />
                )}

                {/* <span className="bg-defaultgray py-2 px-5 rounded-md font-normal">
                  Found
                </span> */}
              </td>
              <td className={` ${show.marksFound ? "hidden" : ""}`}>
                {/* <span className="bg-red text-white py-2 px-5 rounded-md font-normal">
                  Not Found
                </span> */}
              </td>
            </tr>
          </tbody>
        </table>
      </section>
      {/* right side */}
    </div>
  );
}

export default LecturerPage;

/* <tr className=" w-full shadow-lg text-secondary ">
<td className="flex  flex-col py-[17px] pl-5">
  <p>10:20AM </p>
  <p className="text-dateblue">16/2/2020</p>
</td>
<td className=" capitalize">Digital Electronics</td>
<td className="uppercase">BIT 410</td>
<td>2022/2023</td>
<td className="capitalize">Dr. Angulu Ralph</td>

<td className={  `${show.marksFound ? "hidden" :""} text-white font-[700]`}>
  {/* <span className="bg-defaultgray py-2 px-5 rounded-md font-normal">
    Found
  </span> */
// <Details setDetails={false}/>

// </td>
/* <td> 
  /* <span className="bg-red text-white py-2 px-5 rounded-md font-normal">
    Not Found
  </span> */

// <Details setDetails={true} />

// </td>
// </tr>
// */}
