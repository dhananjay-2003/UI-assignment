
const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-[#f5f5f5] border-t border-[#e5e5e5]">
      <div className="absolute inset-0 opacity-40 pointer-events-none">
        <svg
          className="w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <defs>
            <pattern
              id="footer-pattern"
              width="120"
              height="120"
              patternUnits="userSpaceOnUse"
              patternTransform="rotate(25)"
            >
              <line
                x1="0"
                y1="0"
                x2="0"
                y2="120"
                stroke="#dddddd"
                strokeWidth="1"
              />
            </pattern>
          </defs>

          <rect width="100%" height="100%" fill="url(#footer-pattern)" />
        </svg>
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <p className="text-[16px] text-black text-center md:text-left">
            © 2026 Penta Freight. All Rights Reserved
          </p>

         
          <div className="flex items-center gap-5 text-[16px] text-black">
            <a
              href="/"
              className="hover:text-[#f26c2a] transition-colors duration-300"
            >
              Privacy Policy
            </a>

            <span className="w-[6px] h-[6px] rounded-full bg-[#bdbdbd]" />

            <a
              href="/"
              className="hover:text-[#f26c2a] transition-colors duration-300"
            >
              Terms and Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;