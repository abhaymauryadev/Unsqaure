import React from "react";
import "../index.css";
import LightRays from "../LightRays";
import { Mouse } from "lucide-react";
const Hero = () => {
  return (
    <div className="w-full h-screen relative flex justify-center items-center  mt-[60px] z-10 cursor-default">
      <div style={{ width: "100%", height: "900px", position: "relative", }}>
        <LightRays
          raysOrigin="top-center"
          raysColor="#00ffff"
          raysSpeed={1.5}
          lightSpread={0.8}
          rayLength={1.2}
          followMouse={true}
          mouseInfluence={0.1}
          noiseAmount={0.1}
          distortion={0.05}
          className="custom-rays"
        />
      </div>
      <div className="absolute flex flex-col justify-center items-center z-20 ">
      <div className="flex flex-col justify-center items-center  px-4  sm:px-8">
        <h1 className="font-semibold text-white mt-[100px] mb-12 text-center font-poppins text-3xl sm:text-4xl md:text-5xl lg:text-6xl md:leading-[112%]">
          Accelerate Sales Growth with <br className="hidden sm:block" /> Tech Expert
        </h1>
        <p className="text-white text-center mt-[65px] text-base sm:text-lg md:text-xl max-w-5xl">
          Experience the transformative power of our expert marketing strategies
          as we partner with <br className="hidden sm:block" /> you to elevate
          your brand's digital presence. Let us take your brand to new heights
          online!
        </p>

        <div className="mt-20 flex flex-col sm:flex-row gap-4 sm:gap-8 w-full justify-center items-center mb-20">
          <button className="text-white rounded-full h-14 w-full sm:w-60 font-semibold leading-[26px] text-base sm:text-lg bg-violet-600 hover:bg-violet-700 transition transform hover:scale-95 duration-200 border-none">
            Schedule Consultation
          </button>
          <button className="text-white  bg-white/5 backdrop-blur-sm border border-white/10  rounded-full h-14 w-full sm:w-60 font-semibold leading-[26px] text-base sm:text-lg   transition transform hover:scale-95 duration-200">
            Our Services
          </button>
        </div>

        <div className=" flex justify-center items-center animate-bounce mb-9">
          <Mouse color="white " size={32} />
        </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
