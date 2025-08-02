import React from "react";
import { Rocket } from "lucide-react";
const Ambitious = () => {
  return (
    <section>
      <div className="mt-[100px] flex justify-center items-center h-[80px] text-[50px] font-semibold  text-3xl  leading-[112%]  border border-b-white border-t-white ">
        <h1 className="text-white text-center ">
          Innovation and Expertise at the Heart of Everything We Do
        </h1>
      </div>
     
     <section  className="relative flex flex-col md:flex-row justify-between items-start gap-6 max-w-4xl mx-auto px-6 py-12 bg-black rounded-4xl mb-12 border border-amber-200 mt-12">
      <div className="flex flex-col items-start gap-6 max-w-[480px]">
        <div className="bg-white rounded-full p-2">
          <Rocket alt="Rocket Icon" className="w-6 h-6 md:w-8 md:h-8" />
        </div>
      
      <div>
          <h3 className="text-white   text-[2.75rem] md:text-3xl font-bold leading-snug mb-4 max-w-[480px]">
            Our Mission to Solve with Technology, Not Just Sell It
          </h3>
          <p className="text-white text-base leading-relaxed  text-[1.125rem]">
            We're here to create meaningful, functional tech — helping businesses streamline, scale,
            and stay ahead through innovation that works.
          </p>
        </div>

       <div className=" absolute right-[130px] mt-8 md:mt-0">
        <img
          src='https://www.unsquare.in/images/6606e04a4d77039f6a24a3b6-6606ec6c0215bc7382051e3c_Flower%20-%20Black%20Eyes.svg'
          alt="Illustration"
          className="w-full max-w-xs md:max-w-sm object-contain"
        />
      </div>
      </div>
     </section>

     <section className="flex items-center justify-center ">
     <div className=" max-w-4xl mx-auto rounded-2xl grid grid-cols-2 grid-rows-2 gap-4 ">
      <div className="row-span-2 border border-amber-200 rounded-4xl ">
      <img src="https://www.unsquare.in/images/6606e04a4d77039f6a24a3b6-6606ec6e18d2113ad67543b4_Pineapple%20-%20Purple%20Dark%20Eyes.svg" alt="" 
      className="m-[96px]"/>
      
      <div className="items-end p-[24px] ">
        <h1 className="text-white   text-[2.75rem] leading-14">Navigating the Agency Evolution</h1>
        <p className="text-white text-[1.125rem]  mt-3 ">From humble beginnings to remarkable
           achievements, we've embarked on a journey fueled by passion, innovation, and a
            relentless drive for excellence.</p>
      </div>
      </div>
        
      <div className="row-span-2 border ">
         <div className="row-span-2 border border-amber-200 rounded-4xl ">
      <img src="https://www.unsquare.in/images/6606e04a4d77039f6a24a3b6-6606ec6c619fa360546a6120_Cup%20-%20Purple%20Dark%20Eyes.svg " alt="" 
      className="m-[96px]"/>
      
      <div className="items-end p-[24px] ">
        <h1 className="text-white   text-[2.75rem] leading-14">Core Values of Excellence</h1>
        <p className="text-white text-[1.125rem]  mt-3 ">At Unsquare, excellence, innovation, and
          integrity drive us. Collaboration, adaptability, and client-centricity define our culture,
          ensuring success.</p>
      </div>
      </div>
      </div>
    </div>
     </section>
    </section>
  );
};

export default Ambitious;
