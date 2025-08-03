import React from "react";
import { Rocket } from "lucide-react";
const marqueeText = `
  Innovation and Expertise at the Heart of Everything We Do —
  Innovation and Expertise at the Heart of Everything We Do —
  Innovation and Expertise at the Heart of Everything We Do —
  Innovation and Expertise at the Heart of Everything We Do —
  Innovation and Expertise at the Heart of Everything We Do —
  Innovation and Expertise at the Heart of Everything We Do —
  Innovation and Expertise at the Heart of Everything We Do —
  Innovation and Expertise at the Heart of Everything We Do —
  Innovation and Expertise at the Heart of Everything We Do —
  Innovation and Expertise at the Heart of Everything We Do —
  Innovation and Expertise at the Heart of Everything We Do —
  Innovation and Expertise at the Heart of Everything We Do —
  Innovation and Expertise at the Heart of Everything We Do —
  Innovation and Expertise at the Heart of Everything We Do —
  Innovation and Expertise at the Heart of Everything We Do —
  Innovation and Expertise at the Heart of Everything We Do —
  Innovation and Expertise at the Heart of Everything We Do —
  Innovation and Expertise at the Heart of Everything We Do —
  Innovation and Expertise at the Heart of Everything We Do —
  Innovation and Expertise at the Heart of Everything We Do —
  Innovation and Expertise at the Heart of Everything We Do —
  Innovation and Expertise at the Heart of Everything We Do —
  Innovation and Expertise at the Heart of Everything We Do —
  Innovation and Expertise at the Heart of Everything We Do —
  Innovation and Expertise at the Heart of Everything We Do —
  Innovation and Expertise at the Heart of Everything We Do —
  Innovation and Expertise at the Heart of Everything We Do —
  Innovation and Expertise at the Heart of Everything We Do —
  Innovation and Expertise at the Heart of Everything We Do —
`;

const Ambitious = () => {
  return (
    <>
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-100%); }
        }
        .marquee-track {
          display: flex;
          animation: marquee 1500s linear infinite;
        }
      `}
      </style>
      <section>
        <div className="overflow-hidden whitespace-nowrap mt-[20px] h-[80px] flex items-center justify-center">
          <div className="marquee-track">
            <span className="inline-block text-white text-[32px] sm:text-[50px] font-semibold leading-[112%]">
              {marqueeText}
            </span>
            <span className="inline-block text-white text-[32px] sm:text-[50px] font-semibold leading-[112%]">
              {marqueeText}
            </span>
          </div>
        </div>

     
     <section className="relative flex flex-col md:flex-row justify-between items-start gap-6 max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12 bg-black rounded-3xl sm:rounded-4xl mb-8 sm:mb-12 border border-amber-200 mt-8 sm:mt-12">
      <div className="flex flex-col items-start gap-4 sm:gap-6 w-full max-w-full md:max-w-[480px]">
        <div className="bg-white rounded-full p-2">
          <Rocket alt="Rocket Icon" className="w-6 h-6 md:w-8 md:h-8" />
        </div>
        <div>
          <h3 className="text-white text-2xl sm:text-3xl md:text-4xl font-bold leading-snug mb-2 sm:mb-4 max-w-full md:max-w-[480px]">
            Our Mission to Solve with Technology, Not Just Sell It
          </h3>
          <p className="text-white text-base sm:text-lg leading-relaxed">
            We're here to create meaningful, functional tech — helping businesses streamline, scale,
            and stay ahead through innovation that works.
          </p>
        </div>
      </div>
      <div className="relative w-full flex justify-center md:justify-end mt-8 md:mt-0">
        <img
          src='https://www.unsquare.in/images/6606e04a4d77039f6a24a3b6-6606ec6c0215bc7382051e3c_Flower%20-%20Black%20Eyes.svg'
          alt="Illustration"
          className="w-40 sm:w-56 md:w-64 max-w-xs md:max-w-sm object-contain"
        />
      </div>
    </section>

    <section className="flex items-center justify-center px-2 sm:px-0">
      <div className="max-w-4xl w-full mx-auto rounded-2xl grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="border border-amber-200 rounded-3xl sm:rounded-4xl flex flex-col items-center">
          <img
            src="https://www.unsquare.in/images/6606e04a4d77039f6a24a3b6-6606ec6e18d2113ad67543b4_Pineapple%20-%20Purple%20Dark%20Eyes.svg"
            alt=""
            className="my-8 w-32 sm:w-40 md:w-48"
          />
          <div className="items-end p-4 sm:p-6">
            <h1 className="text-white text-2xl sm:text-3xl md:text-[2.75rem]  font-bold">Navigating the Agency Evolution</h1>
            <p className="text-white text-base sm:text-lg mt-3">
              From humble beginnings to remarkable achievements, we've embarked on a journey fueled by passion, innovation, and a relentless drive for excellence.
            </p>
          </div>
        </div>
        <div className="border border-amber-200 rounded-3xl sm:rounded-4xl flex flex-col items-center">
          <img
            src="https://www.unsquare.in/images/6606e04a4d77039f6a24a3b6-6606ec6c619fa360546a6120_Cup%20-%20Purple%20Dark%20Eyes.svg"
            alt=""
            className="my-8 w-32 sm:w-40 md:w-48"
          />
          <div className="items-end p-4 sm:p-6">
            <h1 className="text-white text-2xl sm:text-3xl md:text-[2.75rem]  font-bold">Core Values of Excellence</h1>
            <p className="text-white text-base sm:text-lg mt-3">
              At Unsquare, excellence, innovation, and integrity drive us. Collaboration, adaptability, and client-centricity define our culture, ensuring success.
            </p>
          </div>
        </div>
      </div>
    </section>
    </section>
    </>
  );
};

export default Ambitious;
