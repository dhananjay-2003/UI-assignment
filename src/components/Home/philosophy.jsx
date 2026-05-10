import React from "react";

const PhilosophySection = () => {
  return (
    <section
      className="relative w-full py-8 overflow-hidden bg-cover bg-center"
      style={{
        backgroundImage:
          "url('/assets/philosphy.png')", 
      }}
    >
      <div className="absolute inset-0 bg-[#3f5567]/90"></div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        
        <h2 className="text-[#ff6f2c] text-4xl md:text-5xl font-bold mb-4 md:mb-6">
          Our Philosophy
        </h2>

        <p className="text-white text-[16px] md:text-[18px] leading-[26px] md:leading-[30px] font-normal">
          Customer satisfaction drives everything we do. Every shipment is a
          promise, and we deliver it with precision, care, and professionalism.
          With expert resources, we ensure safe, timely transport, building
          lasting partnerships founded on trust and excellence.
        </p>

        <button className="mt-8 bg-[#ff6f2c] hover:bg-[#e85f20] transition-all duration-300 text-white text-lg font-semibold px-10 py-3 rounded-xl">
          Read more
        </button>
      </div>
    </section>
  );
};

export default PhilosophySection;