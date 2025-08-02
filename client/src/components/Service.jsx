import React from 'react'
import { FolderCode, ShoppingCart, Smartphone} from 'lucide-react'
import { FaWhatsapp } from 'react-icons/fa';

const Service = () => {
  return (
    <section>
      <div className='max-w-4xl mx-auto  mt-[99px]'>
        <h1 className='text-white font-bold text-4xl text-left'>Digital Services Tailored to Elevate Your Brand</h1>
      </div>

      <div className='grid grid-cols-2 grid-rows-2 gap-4 max-w-4xl mx-auto  mt-[30px] '>
          <div className='text-white rounded-4xl border border-amber-200'>
            <FolderCode color='black' className='border border-amber-50  h-12 w-12 m-9 bg-white rounded-full p-3'/>


            <div>
              <h1 className='text-white font-bold text-3xl mb-2 m-9'>Website <br /> Development</h1>
              <p className='text-white font-semibold text-base  m-9'>Crafting responsive, user-friendly websites tailored to your brand's unique needs, ensuring seamless experiences and driving results."</p>
            </div>
          </div>

          <div className='text-white rounded-4xl border border-amber-200'>
            <Smartphone  color='black' className='border border-amber-50  h-12 w-12 m-9 bg-white rounded-full p-3'/>


            <div>
              <h1 className='text-white font-bold text-3xl mb-2 m-9'>App <br /> Development</h1>
              <p className='text-white font-semibold text-base  m-9'>Developing innovative mobile applications for iOS and Android, designed to engage your audience and expand your business's reach.</p>
            </div>
          </div>

          <div className='text-white rounded-4xl border border-amber-200'>
            <ShoppingCart  color='black' className='border border-amber-50  h-12 w-12 m-9 bg-white rounded-full p-3'/>


            <div>
              <h1 className='text-white font-bold text-3xl mb-2 m-9'>E-commerce <br /> Stores</h1>
              <p className='text-white font-semibold text-base  m-9'>Building robust and scalable online stores that maximize sales and provide a seamless shopping experience for your customers.</p>
            </div>
          </div>


           <div className='text-white rounded-4xl border border-amber-200'>
            <FaWhatsapp  color='black' className='border border-amber-50  h-12 w-12 m-9 bg-white rounded-full p-3'/>
      

            <div>
              <h1 className='text-white font-bold text-3xl mb-2 m-9'>WhatsApp <br /> Automation</h1>
              <p className='text-white font-semibold text-base  m-9'>Implementing automated WhatsApp solutions to streamline communication, enhance customer service, and drive sales.</p>
            </div>
          </div>
         
      </div>
    </section>


    

   
  )
}

export default Service