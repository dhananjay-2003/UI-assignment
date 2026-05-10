
import React from "react";
import ImageWithSkeleton from "../ImageWithSkeleton";

const GlobalFootprint = () => {
  return (
    <section className="relative overflow-hidden bg-[#44586a] py-16 min-h-[50vh] lg:h-[100vh] flex flex-col justify-center">
      <div className="absolute inset-0 opacity-20">
        <svg
          className="w-full h-full"
          viewBox="0 0 1600 900"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {[...Array(12)].map((_, i) => (
            <path
              key={i}
              d={`M-${200 + i * 80} ${100 + i * 40}
                  C 400 ${i * 20},
                  900 ${200 + i * 40},
                  1800 ${100 + i * 50}`}
              stroke="white"
              strokeWidth="1.5"
              opacity="0.3"
            />
          ))}
        </svg>
      </div>

      <div className="relative z-10 text-center mb-10 px-6">
        <h2 className="text-4xl lg:text-5xl font-bold text-[#ff7a3d]">
          Our Global Footprint
        </h2>
      </div>

      <div className="relative z-10 flex justify-center px-8 h-[70vh] ">
        <ImageWithSkeleton
          src="/assets/pmap2-NX7A1hFq.webp" 
          alt="Global Footprint"
          className="w-full max-w-7xl"
          imageClassName="object-contain"
        />
      </div>
    </section>
  );
};

export default GlobalFootprint;