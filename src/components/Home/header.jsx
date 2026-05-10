import React, { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full bg-white shadow-sm border-b border-gray-200 relative z-[1000]">
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        <div className="flex items-center justify-between lg:justify-center min-h-[80px] py-4 lg:py-0">
          
          {/* Mobile Logo */}
          <div className="lg:hidden flex items-center">
            <span className="text-[#ff6c2f] font-bold text-[20px] uppercase tracking-widest">PENTA</span>
            <span className="text-gray-500 font-medium text-[20px] uppercase tracking-widest ml-2">Freight</span>
          </div>

          {/* Hamburger Menu Icon (3 lines) on Right */}
          <button 
            className="lg:hidden text-black focus:outline-none"
            onClick={() => setIsOpen(true)}
          >
            <Menu size={28} />
          </button>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex w-full">
            <ul className="flex w-full items-center justify-center gap-12 text-[15px] font-semibold uppercase">
              <li className="text-orange-500 cursor-pointer">Home</li>
              <li className="text-black hover:text-orange-500 transition cursor-pointer">About Us</li>
              <li className="flex items-center gap-1 text-black hover:text-orange-500 transition cursor-pointer">
                Services
                <ChevronDown size={16} />
              </li>
              <li className="flex items-center gap-1 cursor-pointer">
                <span className="text-gray-600">Penta</span>
                <span className="text-sky-500 font-bold">KÜHL</span>
                <ChevronDown size={16} className="text-black" />
              </li>
              <li className="text-black hover:text-orange-500 transition cursor-pointer">Industries</li>
              <li className="text-black hover:text-orange-500 transition cursor-pointer">Careers</li>
              <li className="text-black hover:text-orange-500 transition cursor-pointer">Contact</li>
            </ul>
          </nav>
        </div>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div 
          className="lg:hidden fixed inset-0 bg-black/50 z-[1001]"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Mobile Drawer (Slides from Left) */}
      <div 
        className={`lg:hidden fixed top-0 left-0 h-full w-[280px] sm:w-[320px] bg-white shadow-2xl z-[1002] transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between p-6 border-b border-gray-100">
          <div className="flex items-center">
            <span className="text-[#ff6c2f] font-bold text-lg uppercase tracking-widest">PENTA</span>
            <span className="text-gray-500 font-medium text-lg uppercase tracking-widest ml-1">Freight</span>
          </div>
          <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-black">
            <X size={24} />
          </button>
        </div>

        <div className="overflow-y-auto h-full">
          <ul className="flex flex-col text-[15px] font-semibold uppercase px-6 py-4">
            <li className="text-orange-500 cursor-pointer py-4 border-b border-gray-200">Home</li>
            <li className="text-black hover:text-orange-500 transition cursor-pointer py-4 border-b border-gray-200">About Us</li>
            <li className="flex items-center justify-between text-black hover:text-orange-500 transition cursor-pointer py-4 border-b border-gray-200">
              Services <ChevronDown size={18} />
            </li>
            <li className="flex items-center justify-between cursor-pointer py-4 border-b border-gray-200">
              <div>
                <span className="text-gray-600">Penta</span>
                <span className="text-sky-500 font-bold ml-1">KÜHL</span>
              </div>
              <ChevronDown size={18} className="text-black" />
            </li>
            <li className="text-black hover:text-orange-500 transition cursor-pointer py-4 border-b border-gray-200">Industries</li>
            <li className="text-black hover:text-orange-500 transition cursor-pointer py-4 border-b border-gray-200">Careers</li>
            <li className="text-black hover:text-orange-500 transition cursor-pointer py-4 border-b border-gray-200">Contact</li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;