import React from "react";
import { ChevronDown } from "lucide-react";

const Header = () => {
  return (
    <header className="w-full bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        <div className="flex items-center justify-center min-h-[80px] py-4 lg:py-0">
          <nav className="w-full overflow-x-auto no-scrollbar">
            <ul className="flex items-center justify-start lg:justify-center gap-6 lg:gap-12 text-[13px] lg:text-[15px] font-semibold uppercase min-w-max px-2">
              
              <li className="text-orange-500 cursor-pointer">
                Home
              </li>

              <li className="text-black hover:text-orange-500 transition cursor-pointer">
                About Us
              </li>

              <li className="flex items-center gap-1 text-black hover:text-orange-500 transition cursor-pointer">
                Services
                <ChevronDown size={16} />
              </li>

              <li className="flex items-center gap-1 cursor-pointer">
                <span className="text-gray-600">Penta</span>
                <span className="text-sky-500 font-bold">KÜHL</span>
                <ChevronDown size={16} className="text-black" />
              </li>

              <li className="text-black hover:text-orange-500 transition cursor-pointer">
                Industries
              </li>

              <li className="text-black hover:text-orange-500 transition cursor-pointer">
                Careers
              </li>

              <li className="text-black hover:text-orange-500 transition cursor-pointer">
                Contact
              </li>

            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;