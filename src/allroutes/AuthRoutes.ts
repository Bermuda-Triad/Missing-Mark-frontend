import { createBrowserRouter } from "react-router-dom";
import Regestration from "../components/authpage/Regestration";
import Login from "../components/authpage/Login";


export const authRoute = createBrowserRouter([
   { path:'/login',
    element:<Login/>,
    },
    {
        path:"/regestration",
        element:<Regestration/>
    }
])