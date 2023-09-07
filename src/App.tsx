import { BrowserRouter, Route } from 'react-router-dom'
import LoginPage from './pages/Login/LoginPage'
import MissingMarkForm from './components/missingMarkForm/MissingMarkForm'
import Student from './pages/studentPage/Student'
import MissingMark from './components/missingMarkForm/MissingMark'
import './App.css'
import LecturerPage from './pages/LecturerPage/LecturerPage'

function App() {


  return (
    <BrowserRouter>    
    
   <div className=' font-Poppins'>
    {/* <LoginPage/> */}
    {/* <Student/> */}
    {/* <MissingMarkForm/> */}
    <LecturerPage/>
    {/* <MissingMark/> */}


   </div>
    </BrowserRouter>

  )
}

export default App
