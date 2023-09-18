import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",

  boxShadow: 24,
  p: 4,
};
const ButtonStyle = {
  bgcolor: "#1485D6",
  color: "white",
};
type chooses = {
  setDetails: boolean;
};

export default function Details({ setDetails }: chooses) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <div
        onClick={handleOpen}
        className={`cursor-pointer  flex px-[.8rem]   text-white w-[100px] py-[.6rem] rounded-xl font-Poppins text-[8.rem] font-[400] capitalize"
        ${setDetails ? "bg-green" : "bg-red"}
        
        `}
      >
        <img
          src="src/assets/document-normal.svg"
          className="text-red mr-3 "
          alt=""
        />{" "}
        Detail
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div></div>
          <div className="w-full  flex flex-col items-start justify-center text-[#6E7685]  text-[1rem]">
           
            {
              setDetails ? <h2 className="mt-7 mb-10 text-[3rem] font-extrabold font-Poppins text-green">
              Marks Found
            </h2>
            :
            <h2 className="mt-7 mb-10 text-[3rem] font-extrabold font-Poppins text-red">
            Marks Not Found
          </h2>
            }

            <p>
              Unit Title:<strong>Ethical Issues</strong>
            </p>
            <p>
              Unit Code: <strong>BIT 392</strong>
            </p>

            <p>
              Acedimic Year: <strong>2019/2021</strong>
            </p>
            <p>
              Student Reg Number: <strong>SIT/B/01-00142/2021</strong>
            </p>

            <p className="mt-7">
              Date submitted: <strong>7/2/2012</strong>
            </p>
            <p className="mb-10">
              Date found: <strong>26/7/2010</strong>
            </p>

            <hr className="h-[1px] bg-defaultgray w-full" />

            <h2 className="text-red my-5">Reason</h2>

            {
           !setDetails ? (
              <p className="p-4 border border-[#DADADA] text-[#2C444E] text-[1rem]">
                You did not sit for your Exams. Apply for special exams when
                next offered
              </p>
            ) : (
              <table className="mt-4 w-full">
                <thead>
                  <tr className=" text-red  text-[1rem]">
                    <th className="text-start">CAT</th>
                    <th className="text-start">EXAM</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="text-[2rem]  font-extrabold text-defaultgray">
                    <td className="text-start">23</td>
                    <td className="text-start">50</td>
                  </tr>
                </tbody>
              </table>
            )}

            {/* 
<table className="mt-4 w-full" >
              <thead>
                <tr className=" text-red  text-[1rem]">
                  <th className="text-start">CAT</th>
                  <th className="text-start">EXAM</th>

                </tr>
              </thead>
              <tbody>
                <tr className=            "text-[2rem]  font-extrabold text-defaultgray">
                    <td className="text-start">23</td>
                    <td className="text-start">50</td>
                </tr>
              </tbody>
            </table> */}
          </div>
        </Box>
      </Modal>
    </div>
  );
}

//