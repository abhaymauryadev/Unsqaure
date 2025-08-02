import React from 'react'
import { FaLinkedin,  FaFacebook  } from "react-icons/fa6";

const Footer = () => {
  return (
    <section className=' max-w-4xl mx-auto p-[48px] mt-24 '>
        <div className='flex flex-col gap-6'>
            <div className="flex justify-between items-center pb-4 gap-x-10 gap-y-10 border-b border-white/15">
                <img src="https://www.unsquare.in/images/Un-removebg-preview.png" alt="logo" className='w-[108px] h-auto' />

        <div className="flex flex-wrap gap-x-6 gap-y-2 text-white text-sm">
            <a className="hover:underline" href="/about">About</a>
            <a className="hover:underline" href="/services">Services</a>
            <a className="hover:underline" href="/contact-us">Contact Us</a>
        </div>


    <div className="flex items-center space-x-4">
       <FaLinkedin  color="white"/>

        <FaFacebook color='white' />
    </div>

    </div>
      

    </div>

    <div className="flex flex-wrap items-center justify-between gap-x-10 gap-y-10 text-sm text-white mt-8 mb-8">
  <div className="text-gray-400">© Unsquare 2025, All Rights Reserved</div>
  <a  href="" className="text-gray-400 hover:text-white transition-colors duration-200">Licenses
  </a>
    </div>

</section>
  )
}

export default Footer