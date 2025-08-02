import React from 'react'
import { FaLinkedin,  FaFacebook  } from "react-icons/fa6";

const Footer = () => {
  return (
//     <section className=' max-w-4xl mx-auto p-[48px] mt-24 '>
//         <div className='flex flex-col gap-6'>
//             <div className="flex justify-between items-center pb-4 gap-x-10 gap-y-10 border-b border-white/15">
//                 <img src="https://www.unsquare.in/images/Un-removebg-preview.png" alt="logo" className='w-[108px] h-auto' />

//         <div className="flex flex-wrap gap-x-6 gap-y-2 text-white text-sm">
//             <a className="hover:underline" href="/about">About</a>
//             <a className="hover:underline" href="/services">Services</a>
//             <a className="hover:underline" href="/contact-us">Contact Us</a>
//         </div>


//     <div className="flex items-center space-x-4">
//        <FaLinkedin  color="white"/>

//         <FaFacebook color='white' />
//     </div>

//     </div>
      

//     </div>

//     <div className="flex flex-wrap items-center justify-between gap-x-10 gap-y-10 text-sm text-white mt-8 mb-8">
//   <div className="text-gray-400">© Unsquare 2025, All Rights Reserved</div>
//   <a  href="" className="text-gray-400 hover:text-white transition-colors duration-200">Licenses
//   </a>
//     </div>

// </section>

    <footer className="px-6 md:px-16 lg:px-24 xl:px-32 pt-8 w-full text-gray-500 mt-24">
            <div className="flex flex-col md:flex-row justify-between w-full gap-10 border-b border-gray-500/30 pb-6">
                <div className="md:max-w-96">
                    <img src="https://www.unsquare.in/images/Un-removebg-preview.png" alt="logo" className='w-[108px] h-auto' />
                    <p className="mt-6 text-sm ml-2 text-white">
                     Experience the transformative power of our expert marketing strategies as we partner with
                    you to elevate your brand's digital presence. Let us take your brand to new heights online!
                    </p>
                </div>
                <div className="flex-1 flex items-start md:justify-end gap-20">
                    <div>
                        <h2 className="font-semibold mb-5 text-white">Company</h2>
                        <ul className="text-sm space-y-2 text-white">
                            <li><a href="#">Home</a></li>
                            <li><a href="#">About us</a></li>
                            <li><a href="#">Contact us</a></li>
                            <li><a href="#">Privacy policy</a></li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="font-semibold mb-5 text-white">Get in touch</h2>
                        <div className="text-sm space-y-2 text-white">
                            <p className='text-white'>+1-212-456-7890</p>
                            <p className='text-white'>contact@example.com</p>
                        </div>
                    </div>
                </div>
            </div>
            <p className="pt-4 text-center text-xs md:text-sm pb-5 text-[#999999]">
                Copyright 2025 © <a href="#">Unsqaure</a>. All Right Reserved.
            </p>
        </footer>
  )
}

export default Footer