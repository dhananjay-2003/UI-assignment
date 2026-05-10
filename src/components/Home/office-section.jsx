import React from "react";

const indiaOffices = [
  {
    city: "Mumbai",
    address: [
      "902, 'A' Wing, Times Square,",
      "Andheri-Kurla Road, Marol,",
      "Andheri (East), Mumbai 400 059",
    ],
    phone: "+91 22-6222-6222",
  },
  {
    city: "Ahmedabad",
    address: [
      "D21 The Address, True Value",
      "West Gate, SG highway,",
      "Ahmedabad 380 009",
    ],
    phone: "+91 7940227900",
  },
  {
    city: "Bengaluru",
    address: [
      "205, 2nd floor,",
      "Connection point H.A.L Airport",
      "Exit Road, Bangalore 560 017",
    ],
    phone: "+91 80-4112-5590",
  },
  {
    city: "Chennai",
    address: [
      "Flat no.A1, 1st floor,",
      "No 24 Vembuli Amman koil Street,",
      "Palavanthangal Chennai- 600 114",
    ],
    phone: "+91-44-22241462/ 1464",
  },
  {
    city: "Delhi",
    address: [
      "Penta Freight Pvt. Ltd. Khasra No.",
      "10/1/10/2, 11/5/1, No. 4, Samalkha,",
      "Old Delhi – Gurgaon Road, Opposite",
      "Primary School, New Delhi – 110 037",
    ],
    phone: "+91 11-4078-2222",
  },
  {
    city: "Hyderabad",
    address: [
      "G-27 & 28, Cargo Satellite Building,",
      "Rajiv Gandhi International Airport,",
      "Shamshabad 501 218, Telangana, India",
    ],
    phone: "+91 40-2400-4048",
  },
  {
    city: "Kolkata",
    address: [
      "131, Jangalpur Road, near airport,",
      "Gate No. 3, Motilal Colony, P.O Rajbari,",
      "Kolkata 700 081, West Bengal",
    ],
    phone: "+91 33-2514-7089",
  },
];

const usaOffice = {
  city: "Chicago",
  address: [
    "Penta Freight Pvt.Ltd 5100 Newport Dr.",
    "Sute 4, Rolling Meadows, IL 60008 USA",
  ],
  phone: "+040 234 6559 / +224 434 2154",
};

const OfficeCard = ({ city, address, phone }) => {
  return (
    <div className="w-full">
      <h3 className="text-[22px] font-semibold text-black mb-5">{city}</h3>

      <div className="space-y-1">
        {address.map((line, index) => (
          <p
            key={index}
            className="text-[14px] leading-[26px] text-[#777]"
          >
            {line}
          </p>
        ))}
      </div>

      <p className="text-[14px] text-[#777] mt-3">{phone}</p>
    </div>
  );
};

const OfficesSection = () => {
  return (
    <section className="relative bg-[#ffffff] py-24 overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none flex items-center justify-start overflow-hidden">
        <svg
          className="w-[150%] h-[150%] max-w-none -ml-[25%]"
          viewBox="0 0 1000 1000"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {Array.from({ length: 20 }).map((_, i) => (
            <circle key={i} cx="0" cy="500" r={100 + i * 80} stroke="#000" strokeWidth="2" />
          ))}
        </svg>
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-8 lg:px-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-16 gap-y-20">
          
          <div className="max-w-[320px]">
            <h2 className="text-[36px] leading-[1.2] font-bold text-black">
              Our <span className="text-[#ff7b39] font-normal">India</span> Offices
            </h2>

            <p className="mt-6 text-[15px] leading-[26px] text-[#555]">
              Penta Freight delivers seamless logistics across India, with
              branches in key cities for your convenience.
            </p>
          </div>

          {indiaOffices.map((office, index) => (
            <OfficeCard key={index} {...office} />
          ))}

          <div className="max-w-[320px]">
            <h2 className="text-[36px] leading-[1.2] font-bold text-black mt-2">
              Our <span className="text-[#ff7b39] font-normal">USA</span> Office
            </h2>

            <p className="mt-6 text-[15px] leading-[26px] text-[#555]">
              Penta Freight has expanded its operations globally, beginning with
              the USA, to offer continuous support across continents.
            </p>
          </div>
          <OfficeCard {...usaOffice} />
        </div>
      </div>
    </section>
  );
};

export default OfficesSection;