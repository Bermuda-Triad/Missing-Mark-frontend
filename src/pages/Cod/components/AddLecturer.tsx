import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',

  boxShadow: 24,
  p: 4,
};
const ButtonStyle = {
    bgcolor:'#1485D6',
    color:'white'
}

export default function AddLecturer() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  

  return (
    <div>
     <button className='bg-themeblue text-white py-[8px] px-[10px] text-[13.33px] drop-shadow-md' onClick={handleOpen}>+ Add Lecturer</button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        <div className='w-full  flex flex-col items-center  '>
       <form action="" className='w-full   bg-white text-[16px] '>
        <h2 className='text-defaultgray font-[700] text-[20px] mb-[22px] capitalize'>Add Lecturer</h2>
        <div className='flex flex-col  '>

        <label htmlFor="full name" className='text-defaultgray capitalize'> Full Name</label>
        <input type="text" placeholder='full name' className=' border border-defaultgray  py-[12px] text-[13px] px-[8px] outline-none text-secondary' />

        <label htmlFor="pf-number" className='text-defaultgray capitalize mt-[28px]'>Pf Number</label>
        <input type="text" placeholder='unit code' className='border border-defaultgray py-[12px] px-[8px] outline-none text-secondary' />

        <label htmlFor="pf-number" className='text-defaultgray capitalize mt-[28px]'>Units</label>
        <input type="text" placeholder='unit code' className='border border-defaultgray py-[12px] px-[8px] outline-none text-secondary' />

        <label htmlFor="pf-number" className='text-defaultgray capitalize mt-[28px]'>Units</label>
        <input type="text" placeholder='unit code' className='border border-defaultgray py-[12px] px-[8px] outline-none text-secondary' />

        <label htmlFor="pf-number" className='text-defaultgray capitalize mt-[28px]'>Role</label>
       
       <select name="" id="" className='py-3 pl-3 text-defaultgray'>
        <option className='' value="">Lecturer</option>
       </select>

        
        <input type="submit" value={"SUBMIT"} className='bg-defaultgray text-whit  text-[14px] py-[12px] text-white font-[500] px-[8px] mt-[28px]'/>
        </div>
       </form>
    </div>
        </Box>
      </Modal>
    </div>
  );
}