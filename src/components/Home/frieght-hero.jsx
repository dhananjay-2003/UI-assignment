import React from "react";
import ImageWithSkeleton from "../ImageWithSkeleton";

const FreightHero = () => {
  return (
    <section className="relative w-full h-[80vh] overflow-hidden">
      
      <ImageWithSkeleton
        src="/assets/abtimg-DLZ6rfSw.jpg"
        alt="Airplane"
        className="absolute inset-0 w-full h-[80vh]"
        imageClassName="object-cover"
      />

      <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-white to-transparent z-10"></div>

    
    </section>
  );
};

export default FreightHero;