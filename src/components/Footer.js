import React from 'react'
import logo from '../assets/ailogo.png'
function Footer() {
  return (
    <div className='flex flex-row bg-sky-950 justify-center items-center'>
    <div>
    <img src={logo} alt="" width='150px' className=' mr-[20px]' />
    </div>
      <div>
      <h1 className='text-white text-[40px] ml-[20px]'>Mohit Yadav ❤️ &copy; 2024</h1>
      </div>
    
    </div>
  )
}

export default Footer

