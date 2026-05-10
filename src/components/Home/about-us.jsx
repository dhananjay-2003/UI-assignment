import React from "react";

const AboutUs = () => {
  return (
    <section
      className="relative w-full py-8 bg-cover bg-center"
      style={{
        backgroundImage:
          "url('/assets/aboutUs.png')",
      }}
    >
    
      <div className="absolute inset-0 bg-white/85"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-center gap-8 md:gap-16 items-start">
          
          <div className="min-w-[230px]">
            <h2 className="text-[#f26c23] text-[20px] font-bold uppercase">
              About Us
            </h2>

            <div className="w-[150px] h-[2px] bg-[#f26c23] my-2"></div>

            <h3 className="text-[#f26c23] text-[20px] font-bold uppercase">
              Penta Freight
            </h3>
          </div>

          <div className="max-w-4xl">
            <p className="text-[18px] md:text-[20px] leading-tight text-gray-600 font-light">
              Penta Freight provides reliable{" "}
              <span className="font-bold text-gray-700">
                logistics solutions,
              </span>{" "}
              specializing in temperature-sensitive shipments. We ensure safe,{" "}
              <span className="font-bold text-gray-700">
                on-time delivery
              </span>{" "}
              worldwide. Trust us for seamless supply chain management.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutUs;