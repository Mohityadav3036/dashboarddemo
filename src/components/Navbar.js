import React from 'react'
import logo from '../assets/ailogo.png'
function Navbar() {
  return (
    <div className=' w-full h-50px bg-sky-950 flex flex-row'>
             <div className=' ml-[10%] pt-3 pb-3'>
                <img src={logo} alt="" width="100px" height="50px" />
             </div>
             <div className=' text-white flex  ml-[22%] font-extrabold text-[70px]'>
                DASHBOARD
             </div>
    </div>
  )
}

export default Navbar
