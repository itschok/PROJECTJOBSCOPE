import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Home from './Pagess/Home'
import Registerpage from './Pagess/Registerpage'
import Loginpage from './Pagess/Loginpage'
import Company from './Pagess/Companypage'
import Companylogin from './Pagess/Companlogin'
import CompanyRegis from './Pagess/CompanyRegis'
const router=createBrowserRouter([
  {
    path:"/",
    element:<Home />
  },
  {
    path:"/Register",
    element:<Registerpage/>
  },
  {
    path:"/Login",
    element:<Loginpage/>
  },
  {
    path:"/Company",
    element:<Company/>
  },
  {
    path:"/CompanyLogin",
    element:<Companylogin/>
  },
  {
    path:"/CompanyRegister",
    element:<CompanyRegis/>
  }

])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
