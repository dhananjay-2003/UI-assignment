// AwardsSection.jsx
import React from "react";
import ImageWithSkeleton from "../ImageWithSkeleton";

const awards = [
  {
    logo: "/assets/turkish.png",
    title: "Top Cargo Agents, 2016/17",
    subtitle: "Top Cargo Agents, 2005/06",
  },
  {
    logo: "/assets/finnar.png",
    title: "Top Revenue Performance,",
    subtitle: "2002",
  },
  {
    logo: "/assets/ianair.png",
    title: "Mega Tonners, 2006/07",
  },
  {
        logo: "/assets/turkish.png",

    title: "CONCOR Exim Star, 2003/04",
  },
  {
    logo: "/assets/ianair.png",
    title: "Meritorious Performance,",
    subtitle: "1999/2000",
  },
  {
    logo: "/assets/ianair.png",
    title: "Top Performance, 2008",
    subtitle: "Top Performance, 2007",
  },
  {
    logo: "/assets/finnar.png",
    title: "Significant Support and",
    subtitle: "Contribution, 2007",
  },
  {
    logo: "/assets/turkish.png",
    title: "International Award for",
    subtitle: "Excellence in Air Cargo,",
    extra: "Region India - Winner, 2018",
  },
];

const AwardsSection = () => {
  return (
    <section className="bg-[#f7f7f7] py-20 px-10 md:px-16">

      <div className="flex items-center gap-3 mb-6">
        <span className="w-2 h-2 rounded-full bg-black"></span>

        <button className="border border-gray-300 rounded-full px-6 py-2 text-sm font-medium bg-white shadow-sm">
          Awards
        </button>
      </div>

      <div className="max-w-4xl mb-14">
        <h2 className="text-4xl md:text-5xl font-medium text-black leading-tight">
          Proudly Recognized with Prestigious
        </h2>

        <h3 className="text-4xl md:text-5xl font-light text-gray-500 mt-3">
          Awards and Accolades.
        </h3>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {awards.map((award, index) => (
          <div
            key={index}
            className="bg-white rounded-3xl shadow-md hover:shadow-lg transition-all duration-300 px-8 py-10 min-h-[270px] flex flex-col justify-between"
          >
            <div className="flex items-center justify-center h-28">
              <ImageWithSkeleton
                src={award.logo}
                alt="award-logo"
                className="h-20 w-auto"
                imageClassName="object-contain"
              />
            </div>

            <div className="mt-8 text-gray-800 text-[17px] leading-8">
              <p>{award.title}</p>
              {award.subtitle && <p>{award.subtitle}</p>}
              {award.extra && <p>{award.extra}</p>}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AwardsSection;