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
  border: '2px solid #fff',
  boxShadow: 24,
  p: 4,
};
const ButtonStyle = {
    bgcolor:'#6E7685',
    color:'white'
}

export default function ViewUnits() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  

  return (
    <div>
     <button className='flex gap-1 rounded-md bg-defaultgray text-white py-[7px] px-[10px] text-[13.33px] drop-shadow-md' onClick={handleOpen}><img src="src/assets/eye.svg" alt="" /> View</button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        <div className='w-full  flex flex-col items-center justify-center '>
      <table>
        <thead>
            <tr>
                <th>Unit Title </th>
                <th>Unit Code</th>
            </tr>
        </thead>
      </table>
    </div>
        </Box>
      </Modal>
    </div>
  );
}