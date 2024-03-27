import React, { useState }  from "react";
import { Link } from "react-router-dom";
function NavLogin(){
    return(
    <nav className="p-4 bg-orange-200">
        <div className="flex item-center justify-between ">
                <div className="text-5xl font-black text-orange-500 "><Link to="/">JobScope</Link>
                </div>
                <ul className='hidden md:flex space-x-9 items-end'>
                <Link to ="/" className="text-gray-900  hover:text-orange-500 text-xl">HOME</Link>
                <Link to ="/CompanyLogin" className="text-gray-900 hover:text-orange-500 text-xl">FOR COMPANY</Link>
                </ul>
        </div>
     </nav> 
    )
}
export default NavLogin