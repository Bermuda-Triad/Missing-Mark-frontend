import { BrowserRouter } from 'react-router-dom'
import LoginPage from './pages/Login/LoginPage'
import './App.css'

function App() {


  return (
    <BrowserRouter>
    
   <div className=' font-Poppins'>
    <LoginPage/>
   </div>
    </BrowserRouter>

  )
}

export default App
