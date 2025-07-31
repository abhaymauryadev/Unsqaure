import React from 'react'
import { Sun } from 'lucide-react';

const Navbar = () => {
  return (
    <div className='flex justify-center items-center mt-5 sticky top-0 z-50   '>
        <nav className='flex justify-between items-center  w-[48rem] px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 text-white shadow-sm'>
            <div>
                <img src="https://www.unsquare.in/images/Un-removebg-preview.png" alt="Tech Solution logo" className='h-15 w-40 rounded-full bg-transparent' />
            </div>
            <div className='flex items-center justify-center'>
                <ul className='flex flex-row gap-6 '>
                    <li className='cursor-pointer semi-bold text-xl'>Home</li>
                    <li className='cursor-pointer semi-bold text-xl'>Service</li>
                    <li className='cursor-pointer semi-bold text-xl'>Contact Us</li>
                    <li className='cursor-pointer semi-bold text-xl mt-1'><Sun /></li>
                    <li className='cursor-pointer semi-bold text-xl'></li>
                </ul>
            </div>
        </nav>
    </div>
  )
}

export default Navbar