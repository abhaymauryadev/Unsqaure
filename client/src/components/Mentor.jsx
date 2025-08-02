import React from 'react'

const mentor = () => {
  return (
   <section className=' max-w-4xl mx-auto  mt-[99px]'>
    <div>
        <h1 className='text-white text-left font-bold text-[2.75rem]'>Meet Our Collaborators</h1>
    </div>

    <div className='flex mt-[50px] justify-between'>
        <div className='logo-container'>
        <img className='w-[160px] h-auto transition transform hover:scale-105 duration-200 rounded-full cursor-logo' src="https://www.unsquare.in/images_unsq/console.png" alt="console" />
        </div>

        <div className='logo-container'>
        <img className='w-[160px] h-auto transition transform hover:scale-105 duration-200 rounded-full cursor-logo' src="https://www.unsquare.in/images_unsq/roaders.png" alt="roaders" />
        </div>

        <div className='logo-container'>
        <img className='w-[160px] h-[9.375rem] transition transform hover:scale-105 duration-200 rounded-full cursor-logo' src="https://www.unsquare.in/images/6606e04a4d77039f6a24a3b6-6606f132103b49256473c743_logoipsum-3.svg" alt="logoipsum" />
        </div>

        <div className='logo-container'>
        <img className='w-[160px] h-auto transition transform hover:scale-105 duration-200 rounded-full cursor-logo' src="https://www.unsquare.in/images_unsq/yahoom.png" alt="yahoom" />
        </div>
    </div>
   </section>
  )
}

export default mentor