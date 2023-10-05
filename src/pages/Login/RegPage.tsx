
import Regestration from '../../components/authpage/Regestration'


import { useNavigate } from 'react-router-dom'
import LoginPage from './LoginPage'

type Props = {}

function RegPage({}: Props) {

  
 
  const navigate = useNavigate()

  return (
    <div className='flex items- w-full h-screen justify-center gap-[109px]'>
      
        <div className={`w-full   bg-[url('src/assets/loginimage.jpg')] bg-center bg-cover flex items-center justify-start `}>
       
           <div className='ml-[68px] text-white w-[490px]'>
           <h1 className='text-[27.65px] font-400'>Masinde Muliro University of Science and Technology</h1>
           <h1 className='font-[700] text-[57.33px]'>Missing Marks System</h1>
           </div>

        </div>

{/* there will be some logic here if he or she is not req he will be taken to another page  */}
        <div className='w-full pt-[40px] bg-red-400 '>
            {/* logo goes whoes */}
        <div className='mb-[70px] ' >
            <img src="src/assets/mmustlogo.svg" className='h-[106px] w-[121px]' alt="" />
        </div>
  
        
          
<Regestration/>
        
       

     
        </div>
    </div>
  )
}

export default RegPage