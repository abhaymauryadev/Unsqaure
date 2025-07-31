import React from "react";
import '../index.css' 

const Hero = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center mt-45">
        <h1 className="text-[72px] font-semibold  text-3xl  leading-[112%]  text-white m-0 text-center font-poppins">
          Accelerate Sales Growth with <br /> Tech Expert
        </h1>
        <p className="text-white flex flex-col justify-start items-center mt-5">Experience the transformative power of our expert marketing strategies as we partner
         with   <br />you to elevate your brand's digital presence. Let us take your brand to new heights online!</p>


       <div className="mt-10 flex gap-10">
        <button className="text-white border border-white  rounded-full h-18 w-60 font-semibold  leading-[26px] text-[18px] bg-violet-600 hover:bg-violet-70 transition transform hover:scale-95 duration-200 border-none" >Schedule Consultation</button>
        <button className="text-white border border-white  rounded-full h-18 w-60 font-semibold  leading-[26px] text-[18px] bg-transparent transition transform hover:scale-95 duration-200 ">Our Services</button>
      </div> 

      </div>

     
    </>
  );
};

export default Hero;
