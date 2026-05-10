"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import ImageWithSkeleton from "../ImageWithSkeleton";

import "swiper/css";

export default function CertificationCarousel() {
  const certifications = [
    {
      image:
        "/assets/pharma-aero-CbG2eANT.png",
    },
    {
      image:
        "/assets/mto-EBLy_4Yv.png",
    },
    {
      image:
        "/assets/indo-italianpng-45aWgs_y.png",
    },
    {
      image:
        "/assets/pharma-aero-CbG2eANT.png",
    },
    {
      image:
        "/assets/mto-EBLy_4Yv.png",
    },
    {
      image:
        "/assets/indo-italianpng-45aWgs_y.png",
    },
    {
      image:
        "/assets/pharma-aero-CbG2eANT.png",
    },
    {
      image:
        "/assets/mto-EBLy_4Yv.png",
    },
    {
      image:
        "/assets/indo-italianpng-45aWgs_y.png",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[#4f6372] py-24">
      
      <div className="absolute inset-0 opacity-10">
        <div className="w-full h-full bg-[radial-gradient(circle_at_center,white_1px,transparent_1px)] bg-[size:120px_120px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-[#ff7a36] text-4xl md:text-6xl font-semibold mb-3 md:mb-5">
            Certifications
          </h2>

          <p className="text-white text-xl">
            Certified excellence, ensuring compliance,
            quality, and global logistics reliability.
          </p>
        </div>

        <Swiper
          modules={[Autoplay]}
          loop={true}
          speed={5000}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          allowTouchMove={false}
          spaceBetween={24}
          slidesPerView={4.5}
          breakpoints={{
            320: {
              slidesPerView: 1.2,
            },
            640: {
              slidesPerView: 2.2,
            },
            1024: {
              slidesPerView: 4.5,
            },
          }}
          className="certificationSwiper"
        >
          {certifications.map((item, index) => (
            <SwiperSlide key={index}>
              
              <div
                className="
                  bg-[#f7f7f7]
                  rounded-[32px]
                  h-[250px]
                  flex items-center justify-center
                  px-10
                "
              >
                <ImageWithSkeleton
                  src={item.image}
                  alt="certification"
                  className="h-[80px] md:h-[120px] w-full"
                  imageClassName="object-contain"
                />
              </div>

            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <style jsx global>{`
        .certificationSwiper .swiper-wrapper {
          transition-timing-function: linear !important;
        }
      `}</style>
    </section>
  );
}