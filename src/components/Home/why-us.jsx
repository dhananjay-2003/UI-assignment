import React, { useEffect, useRef } from "react";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import ImageWithSkeleton from "../ImageWithSkeleton";

const StatCounter = ({ value }) => {
  const match = value.match(/^(\d+)(.*)$/);
  
  if (!match) {
    return <span>{value}</span>;
  }

  const [, numStr, suffix] = match;
  const num = parseInt(numStr, 10);

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 60,
    stiffness: 100,
  });

  useEffect(() => {
    if (isInView) {
      motionValue.set(num);
    }
  }, [isInView, num, motionValue]);

  useEffect(() => {
    return springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = Math.floor(latest) + suffix;
      }
    });
  }, [springValue, suffix]);

  return <span ref={ref}>0{suffix}</span>;
};

export default function WhyChooseSection() {
  const features = [
    {
      icon: "/assets/comphrensive.png",
      title: "Comprehensive Solutions",
      desc: "Full-spectrum logistics services including air, sea, and multimodal transport for seamless handling of your cargo.",
    },
    {
      icon: "/assets/expert.png",
      title: "Expertise and Experience",
      desc: "Over 30+ years of experience with skilled customs agents ensuring accurate clearance and secure delivery.",
    },
    {
      icon: "/assets/3rd.png",
      title: "State-of-the-Art Facilities",
      desc: "Advanced transit warehouse with specialized storage and a fleet of reefer and general trucks for efficient nationwide transport.",
    },
  ];

  return (
    <section className="w-full bg-[#f7f7f7] min-h-screen lg:h-screen flex flex-col overflow-hidden lg:overflow-hidden">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-b border-neutral-200 flex-none lg:flex-1 items-stretch">
        
        <div className="px-6 lg:px-10 py-10 border-b md:border-b-0 md:border-r border-neutral-200 flex flex-col justify-center">
          <div className="flex items-center gap-4 mb-10">
            <span className="w-2 h-2 bg-black rounded-full"></span>

            <button className="border border-neutral-300 rounded-full px-8 py-3 text-[32px] leading-none font-light">
              Why us
            </button>
          </div>

          <h2 className="text-[36px] lg:text-[40px] leading-[1.1] font-light tracking-[-1px]">
            Why choose
            <br />
            <span className="text-neutral-500">
              Penta Freight.
            </span>
          </h2>
        </div>

        {features.map((item, index) => (
          <div
            key={index}
            className="px-6 lg:px-8 py-10 border-b md:border-b-0 md:border-r last:border-r-0 lg:border-b-0 border-neutral-200 flex flex-col justify-center"
          >
            <div className="mb-6 h-[40px] w-[40px]">
              <ImageWithSkeleton src={item.icon} alt={item.title} className="w-full h-full" imageClassName="object-contain" />
            </div>

            <h3 className="text-[24px] lg:text-[28px] leading-tight font-normal mb-4">
              {item.title}
            </h3>

            <p className="text-[16px] lg:text-[18px] leading-relaxed text-neutral-500 font-light">
              {item.desc}
            </p>
          </div>
        ))}
      </div>

      <div className="relative bg-[#4d6172] overflow-hidden flex-none lg:flex-1 flex flex-col justify-center py-12 lg:py-0">
        
        <div className="absolute inset-0 opacity-10">
          <div className="w-full h-full bg-[radial-gradient(circle_at_center,white_1px,transparent_1px)] bg-[size:120px_120px]" />
        </div>

        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 px-6 lg:px-16 py-10 relative z-10 w-full gap-12 lg:gap-0">
          
          <div className="flex flex-col justify-center">
            <h2 className="text-[#ff7b39] text-[36px] lg:text-[48px] font-semibold mb-4">
              Our Achievements
            </h2>

            <p className="text-white text-[20px] leading-relaxed max-w-[600px]">
              Over 31+ years of excellence, trusted globally,
              delivering reliable logistics solutions with precision.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-10 gap-x-6">
            {[
              ["7+", "Strategic Domestic Offices"],
              ["USA", "Global presence"],
              ["200+", "Logistics Experts"],
              ["50+", "Awards & Accolades"],
            ].map((item, index) => (
              <div key={index}>
                <h3 className="text-white text-[48px] lg:text-[64px] font-semibold leading-none mb-2">
                  <StatCounter value={item[0]} />
                </h3>

                <p className="text-white text-[20px] font-light">
                  {item[1]}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}