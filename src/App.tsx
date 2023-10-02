import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LoginPage from './pages/Login/LoginPage'
import MissingMarkForm from './components/missingMarkForm/MissingMarkForm'
import Student from './pages/studentPage/Student'
import MissingMark from './components/missingMarkForm/MissingMark'
import './App.css'
import LecturerPage from './pages/LecturerPage/LecturerPage'
import CodPage from './pages/Cod/CodPage'

function App() {


  return (
    <BrowserRouter>    
    
   <div className=' font-Poppins'>
    <Routes>

    <Route path='/' Component={LoginPage}/>
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

  )
}

export default App
