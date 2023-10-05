import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LoginPage from './pages/Login/LoginPage'

import Student from './pages/studentPage/Student'

import './App.css'
import LecturerPage from './pages/LecturerPage/LecturerPage'
import CodPage from './pages/Cod/CodPage'
import RegPage from './pages/Login/RegPage'

function App() {


  return (
    <div>

    <BrowserRouter>    
    
   <div className=' font-Poppins'>
    <Routes>

    <Route path='/' Component={LoginPage}/>
    <Route path="/register" Component={RegPage} />
    <Route path='/student' Component={Student}/>
    <Route path='/lecturerpage' Component={LecturerPage}/>
    <Route path='/codpage' Component={CodPage}/>

    {/* <Student/> */}
    {/* <MissingMarkForm/> */}
    {/* <LecturerPage/> */}
    {/* <MissingMark/> */}
    {/* <LecturerPage/> */}
    {/* <CodPage/> */}
    </Routes>


   </div>
    </BrowserRouter>
    </div>
    

  )
}

export default App
