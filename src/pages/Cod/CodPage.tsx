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

  const [selectedComponent,setSelectedComponent] = useState("allapps")

  const renderComponent = () => {
    switch (selectedComponent) {
      case "allapps":
        return <AllApps/>
      case "units" :
        return <Units/>
      case "lectures":
        return <Lectures/>
      
    }
  }
  return (
    <div className=" flex bg-brightwhite items-start justify-center ">
      {/* left side */}
      <section className="h-screen  px-4 border-r bg-white   border-lightGray max-w-[14rem] ">
        <div className="flex gap-[6rem]">
          <img
            src="src/assets/mmustlogo.svg"
            className="h-[59px] w-[67px]"
            alt=""
          />

          <button className=" ng-red">
            
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

              // setSelectedComponent("allapps")
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
              // setSelectedComponent("units")

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

              // setSelectedComponent("findmore")
            }}
          >
            find more
          </button>
        </div>

        <div></div>
      </section>
      {/* left side */}

      {/* right side */}

      <section className="flex-1   flex flex-col h-full    ">
      <div className="flex justify-between items-center py-6  bg-white shadow-sm px-5 ">

      <div className="text-etrabold mx-5  ">
        
        <Title title="Missing Mark Portal" />
      </div>
      {/* the drop down */}
      <Profile whosePage="COD" reg="josephat" />
        </div>
<div className="">

        {
          // show.allApplication ||  show.lecturer ? <AllApps/> : show.allApplication  ? <Lectures/> : show.units ? <Units/> : <FindMarks/>
          show.allApplication ? <AllApps/> : show.lecturer ? <Lectures/> : show.units ? <Units/> : <FindMarks/>
          // renderComponent()
          
          
          
        }

        </div>
          
        

      {/* <Units/> */}
      {/* <AllApps /> */}
      </section>



      {/* right side */}
    </div>
  );
}

export default CodPage;
