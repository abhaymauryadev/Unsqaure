import React from 'react'
import { Sun } from 'lucide-react';

const Navbar = () => {
  
  return (
    <>
    
    <div
  id="navbar"
  className="flex justify-center items-center mt-5 fixed top-0 z-50 w-full px-2"
>
  <nav className="flex justify-between items-center w-full max-w-5xl px-2 sm:px-4 py-2 rounded-full backdrop-blur-sm border border-white/10 text-white shadow-sm">
    <div>
      <img
        src="https://www.unsquare.in/images/Un-removebg-preview.png"
        alt="Tech Solution logo"
        className="h-10 w-28 sm:h-12 sm:w-32 md:h-14 md:w-36 rounded-full bg-transparent object-contain"
      />
    </div>
    <div className="flex items-center justify-center">
      <ul className="flex flex-row gap-3 sm:gap-6">
        <li className="cursor-pointer font-semibold text-base sm:text-lg md:text-xl">Home</li>
        <li className="cursor-pointer font-semibold text-base sm:text-lg md:text-xl">Service</li>
        <li className="cursor-pointer font-semibold text-base sm:text-lg md:text-xl">Contact Us</li>
        <li className="cursor-pointer font-semibold text-base sm:text-lg md:text-xl mt-1">
          <Sun />
        </li>
        <li></li>
      </ul>
    </div>
  </nav>
</div>
    </>
  )
}

export default Navbar