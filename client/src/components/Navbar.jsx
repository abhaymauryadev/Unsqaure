import React from 'react'
import { Sun } from 'lucide-react';
import gsap from 'gsap';

const Navbar = () => {
  
  gsap.from("#navbar",{
    y:-1.0,
    opacity:1,
    duration:1,
    delay:1,
  })

  return (
    <>
    
    <div id='navbar' className="flex justify-center items-center mt-5 sticky top-0 z-10000 w-full">
      <nav  className="flex justify-between items-center w-full max-w-5xl px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 text-white shadow-sm mx-2">
        <div>
          <img
            src="https://www.unsquare.in/images/Un-removebg-preview.png"
            alt="Tech Solution logo"
            className="h-10 w-28 sm:h-12 sm:w-36 md:h-15 md:w-40 rounded-full bg-transparent object-contain"
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