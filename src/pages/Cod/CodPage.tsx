import React from "react";
import { useState } from "react";
import Title from "../../components/Title";
import Profile from "../../components/Profile";
import Details from "../../components/missingMarkForm/Details";
import AllApps from "./components/AllApps";
import Lectures from "./components/Lectures";
import Units from "./components/Units";
import FindMarks from "./components/FindMarks";

type Props = {};

function CodPage({}: Props) {
  const [show, setShow] = useState({
    allApplication: true,
    lecturer: false,
    units: false,
    findMore: false,
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
            className={`text-start py-2  w-14rem] pl-5  text-defaultgray`}
          >
            Dashboard
          </button>
          <button
            className={`text-start py-2  w-14rem] pl-5  ${
              show.allApplication
                ? "text-themeblue bg-lightGray"
                : "text-defaultgray"
            }`}
            onClick={() => {
              console.log(show);
              setShow({
                allApplication: true,
                lecturer: false,
                units: false,
                findMore: false,
              });
            }}
          >
            All Application
          </button>
          <button
            className={`text-start py-2  w-14rem] pl-5  ${
              show.lecturer ? "text-themeblue bg-lightGray" : "text-defaultgray"
            }`}
            onClick={() => {
              setShow({
                allApplication: false,
                lecturer: true,
                units: false,
                findMore: false,
              });
              console.log(show);
            }}
          >
            Lecturers
          </button>
          <button
            className={`text-start py-2  w-14rem] pl-5  ${
              show.units ? "text-themeblue bg-lightGray" : "text-defaultgray"
            }`}
            onClick={() => {
              setShow({
                allApplication: false,
                lecturer: false,
                units: true,
                findMore: false,
              });

              console.log(show)
            }}
          >
            Units
          </button>

          <button
            className={`text-start py-2 pl-5 text-defaultgray capitalize
          ${show.findMore ? "text-themeblue bg-lightGray" : "text-defaultgray"}`}
            onClick={() => {
              setShow({
                allApplication: false,
                lecturer: false,
                units: false,
                findMore: true,
              });
            }}
          >
            find more
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

        {
          show.allApplication ||  show.lecturer ? <AllApps/> : show.allApplication  ? <Lectures/> : show.units ? <Units/> : <FindMarks/>

          
        }

          
        
      <Lectures/>
      {/* <Units/> */}
      {/* <AllApps /> */}
      </section>



      {/* right side */}
    </div>
  );
}

export default CodPage;
