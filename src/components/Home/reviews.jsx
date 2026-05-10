import React from "react";
import { motion } from "framer-motion";
import ImageWithSkeleton from "../ImageWithSkeleton";

export default function ReviewsStickySection() {
  const testimonials = [
    {
      logo: "/assets/luftansa.png",
      company: "Lufthansa Cargo",
      text: `“Penta Freight India was founded 25 years ago and has been a highly valued and reliable partner of Lufthansa Cargo since then. We know that they always stand by their commitment, which makes a meaningful difference to our business. Their continuous high focus on customer service and their strive towards individual solutions are key to staying dynamic and competitive in the market. Penta Freight is a pioneer in various ways: They were amongst the first forwarders to become our Premium Partner and so far they are the only one in India.... ”`,
      name: "Frank Naeve",
      role: "Vice President Asia Pacific",
    },
    {
      logo: "/assets/watson.png",
      company: "Watson Pharmaceuticals",
      text: `“Penta Freight has been one of our export LSP’s for several years and our experience with them has been consistently good. Besides having strong relationships with airlines to obtain competitive rates, Penta Freight has the ability to get things done in a compliant manner. In addition, an excellent service level and professional relationship was maintained throughout the course of export operations. Best wishes for all success. ”`,
      name: "Ryan Vegias",
      role: "Vice President - Supply Chain",
    },
    {
      logo: "/assets/sunpharma.png",
      company: "SUN Pharma",
      text: `“We highly regard Penta Freight's professionalism and knowledge in the freight field.  Their team takes the work load and worry off our shoulders. For about two decades we have been satisfied by the flexible, reliable and trustworthy service and excellent quality of work. One key feature that Penta Freight portrays is that they understand our needs and put their best efforts in making thing possible. They have continued to innovate and change with the freight industry.... ”`,
      name: "Makarand Sane",
      role: "General Manager",
    },
    {
      logo: "/assets/luftansa.png",
      company: "Lufthansa Cargo",
      text: `"“Penta Freight India was founded 25 years ago and has been a highly valued and reliable partner of Lufthansa Cargo since then. We know that they always stand by their commitment, which makes a meaningful difference to our business. Their continuous high focus on customer service and their strive towards individual solutions are key to staying dynamic and competitive in the market. Penta Freight is a pioneer in various ways: They were amongst the first forwarders to become our Premium Partner and so far they are the only one in India.... ”`,
      name: "Frank Naeve",
      role: "Vice President Asia Pacific",
    },
  ];

  return (
    <section className="bg-[#f6f6f6] py-16 lg:py-32 relative">
      <div className="max-w-[80vw] mx-auto px-6 lg:px-10 flex flex-col lg:flex-row gap-12 lg:gap-8 items-start relative">
        
        {/* LEFT SECTION - STICKY (80vh) */}
        <div className="w-[60vh] lg:w-[40%] h-auto lg:h-[80vh] lg:sticky lg:top-[10vh] flex flex-col justify-center pb-12 lg:pb-0">
          <div className="max-w-md scale-100 lg:scale-[0.9] origin-left">
            <div className="flex items-center gap-3 mb-8">
              <span className="w-2 h-2 bg-black rounded-full"></span>
              <button className="border border-neutral-300 rounded-full px-5 py-2 text-sm">
                Reviews
              </button>
            </div>
            <h2 className="text-4xl lg:text-5xl leading-tight font-light text-black mb-6 lg:mb-8">
              Hear From Our Satisfied
              <br />
              Clients Worldwide.
            </h2>
            <p className="text-neutral-500 text-lg leading-8">
              Explore what industry leaders and long term partners
              say about our commitment to excellence and innovation.
            </p>
          </div>
        </div>

        {/* RIGHT SECTION (150vh) */}
        <div className="w-full lg:w-[60%] lg:min-h-[150vh] flex flex-col justify-start">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 auto-rows-fr scale-100 lg:scale-[0.82] origin-top">
            {testimonials.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: (index % 2) * 0.1 }}
                className={`bg-white rounded-3xl shadow-[0_10px_30px_rgba(0,0,0,0.06)] p-8 h-full flex flex-col justify-between ${index % 2 !== 0 ? "sm:mt-[200px]" : ""}`}
              >
                <div>
                  {item.logo && (
                    <ImageWithSkeleton src={item.logo} alt={item.company} className="h-12 w-32 mb-6" imageClassName="object-contain object-left" />
                  )}
                  <h3 className="text-[#ff8a2a] font-semibold text-lg mb-6">
                    {item.company}
                  </h3>
                  <p className="text-neutral-500 leading-8 text-[15px]">
                    {item.text}
                  </p>
                </div>
                <div className="pt-8">
                  <h4 className="text-black font-medium text-lg">
                    {item.name}
                  </h4>
                  <p className="text-neutral-400 text-sm mt-2">
                    {item.role}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        
      </div>
    </section>
  );
}