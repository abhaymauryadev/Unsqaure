import React from 'react'
import { Rocket } from 'lucide-react'
const Ambitious = () => {
  return (
  <div>
    <div className='mt-[100px] flex justify-center items-center h-[80px] text-[50px] font-semibold  text-3xl  leading-[112%]  border border-amber-500'>
      <h1 className='text-white text-center '>Innovation and Expertise at the Heart of Everything We Do</h1>
    </div>

   <div className='banner  border border-amber-500 h-100 w-100 mt-32 '> 
      <div className='flex justify-center items-center'>
          <Rocket className='bg-white rounded-full ' />
      </div>
      <div className=''>
        <h1>Our Mission to Solve with Technology, Not Just Sell It</h1>

      </div>
      <div className=''>
        <p>We're here to create meaningful, functional tech — helping businesses streamline, scale, and stay ahead through innovation that works.</p>
      </div>
      <div>
        <img src="https://www.unsquare.in/images/6606e04a4d77039f6a24a3b6-6606ec6c0215bc7382051e3c_Flower%20-%20Black%20Eyes.svg" alt="" />
      </div>
    </div>

  </div>
    
  )
}

export default Ambitious