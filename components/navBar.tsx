import React from 'react'
import Logo from './Logo'

const NavBar = () => {
  return (
    <div className='bg-red-900 z-1000 flex items-center justify-between px-12 fixed w-full h-[15%]'>
      <div>
        <Logo/>
      </div>
      
      <div className='hidden md:flex space-x-12 items-center justify-between text-2xl font-bold'>
        <p>Home</p>
        <p>About</p>
        <p>Product</p>
        <p>Contact Us</p>
      </div>

    </div>
  )
}

export default NavBar