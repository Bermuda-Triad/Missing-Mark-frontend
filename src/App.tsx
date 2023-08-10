import { BrowserRouter, Route } from 'react-router-dom'
import LoginPage from './pages/Login/LoginPage'
import MissingMarkForm from './components/missingMarkForm/MissingMarkForm'
import Student from './pages/studentPage/Student'
import MissingMark from './components/missingMarkForm/MissingMark'
import './App.css'

function App() {


  return (
    <BrowserRouter>
    
    
   <div className=' font-Poppins'>
    {/* <LoginPage/> */}
    <Student/>
    {/* <MissingMarkForm/> */}
    {/* <MissingMark/> */}


   </div>
    </BrowserRouter>

  )
}

export default App
