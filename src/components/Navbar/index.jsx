import { useEffect, useState } from "react";
import NavbarDropdown from "./navbarDropdown";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollPos, setScrollPos] = useState(0);

  const handleOpen = () => setIsOpen((prev) => !prev);

  const handleScrollPos = () => {
    const currentScrollPos = window.scrollY;

    if (currentScrollPos > scrollPos) {
      setIsOpen(false);
    }

    setScrollPos(currentScrollPos);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScrollPos);

    return () => {
      window.removeEventListener("scroll", handleScrollPos);
    };
  }, [scrollPos]);

  return (
    <nav className="bg-gradient-to-b from-purple-800 to-purple-600 relative">
      <div className="container mx-auto max-w-[1344px]">
        <div className="h-16 md:h-20 p-5 md:py-6 lg:px-5 flex items-center justify-between z-20">
          {/* Icon */}
          <a href="#">
            <img
              className="w-[124px] h-9 lg:w-[150px] lg:h-[42px] object-cover"
              src="/shopify-header.png"
              alt="shopify-icon"
            />
          </a>

          {/* Hamburger */}
          <div
            onClick={handleOpen}
            className={`${
              isOpen ? "open" : ""
            } flex flex-col items-center w-fit gap-[7px] cursor-pointer md:hidden z-20`}
          >
            <span className="transition-all duration-500 ease-in-out h-[2px] w-5 bg-white rounded-full"></span>
            <span className="transition-all duration-500 ease-in-out h-[2px] w-4 bg-white rounded-full"></span>
            <span className="transition-all duration-500 ease-in-out h-[2px] w-5 bg-white rounded-full"></span>
          </div>

          {/* Menu */}
          <div className="hidden md:flex items-center md:gap-4 lg:gap-8 text-white text-sm lg:text-base font-body">
            <a href="#" className="navlink active-navlink">
              Explore
            </a>
            <a href="#" className="navlink">
              Solutions
            </a>
            <a href="#" className="navlink">
              Pricing
            </a>
            <a href="#" className="navlink">
              Blog
            </a>
            <a href="#" className="navlink">
              Community
            </a>
          </div>

          {/* Button */}
          <div className="hidden md:flex md:gap-4 lg:gap-[25px] items-center text-sm lg:text-base font-head font-medium">
            <a href="#">
              <p className="text-white underline cursor-pointer">Sign In</p>
            </a>
            <a href="#">
              <button className="text-white bg-gradient-to-r from-blue-500 to-blue-400 hover:from-blue-600 hover:to-blue-500 focus:outline-none md:py-2.5 px-4 py-3.5 px-[25px] rounded-full transition-all duration-300 ease-in">
                Get Started
              </button>
            </a>
          </div>
        </div>

        {/* Navbar Menu (Mobile) */}
        <NavbarDropdown isOpen={isOpen} />
      </div>
    </nav>
  );
}
