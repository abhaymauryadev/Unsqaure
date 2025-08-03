import React from 'react'
import { FolderCode, ShoppingCart, Smartphone } from 'lucide-react'
import { FaWhatsapp } from 'react-icons/fa';

const Service = () => {
  return (
    <section>
      <div className="max-w-4xl mx-auto mt-16 px-4">
        <h1 className="text-white font-bold text-3xl sm:text-4xl md:text-5xl text-left">
          Digital Services Tailored to Elevate Your Brand
        </h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-4xl mx-auto mt-8 px-4 ">
        <div className="text-white rounded-3xl border border-amber-200 flex flex-col items-start bg-white/5 hover:scale-95 transition-transform duration-300 hover:border-black">
          <FolderCode color="black" className="border border-amber-50 h-12 w-12 mt-8 ml-8 bg-white rounded-full p-3" />
          <div>
            <h1 className="text-white font-bold text-2xl sm:text-3xl mb-2 ml-8 mt-4">Website <br /> Development</h1>
            <p className="text-white font-semibold text-base ml-8 mb-8">
              Crafting responsive, user-friendly websites tailored to your brand's unique needs, ensuring seamless experiences and driving results.
            </p>
          </div>
        </div>

        <div className="text-white rounded-3xl border border-amber-200 flex flex-col items-start bg-white/5 hover:scale-95 transition-transform duration-300 hover:border-black">
          <Smartphone color="black" className="border border-amber-50 h-12 w-12 mt-8 ml-8 bg-white rounded-full p-3" />
          <div>
            <h1 className="text-white font-bold text-2xl sm:text-3xl mb-2 ml-8 mt-4">App <br /> Development</h1>
            <p className="text-white font-semibold text-base ml-8 mb-8">
              Developing innovative mobile applications for iOS and Android, designed to engage your audience and expand your business's reach.
            </p>
          </div>
        </div>

        <div className="text-white rounded-3xl border border-amber-200 flex flex-col items-start bg-white/5
         hover:scale-95 transition-transform duration-300
          hover:border-black">
          <ShoppingCart color="black" className="border border-amber-50 h-12 w-12 mt-8 ml-8 bg-white rounded-full p-3 " />
          <div>
            <h1 className="text-white font-bold text-2xl sm:text-3xl mb-2 ml-8 mt-4 ">E-commerce <br /> Stores</h1>
            <p className="text-white font-semibold text-base ml-8 mb-8">
              Building robust and scalable online stores that maximize sales and provide a seamless shopping experience for your customers.
            </p>
          </div>
        </div>

        <div className="text-white rounded-3xl border border-amber-200 flex flex-col items-start bg-white/5 hover:scale-95 transition-transform duration-300 hover:border-black">
          <FaWhatsapp color="black" className="border border-amber-50 h-12 w-12 mt-8 ml-8 bg-white rounded-full p-3" />
          <div>
            <h1 className="text-white font-bold text-2xl sm:text-3xl mb-2 ml-8 mt-4">WhatsApp <br /> Automation</h1>
            <p className="text-white font-semibold text-base ml-8 mb-8">
              Implementing automated WhatsApp solutions to streamline communication, enhance customer service, and drive sales.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Service