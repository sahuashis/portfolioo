import React, { useState, useEffect } from 'react';
import { FaChevronRight } from 'react-icons/fa';
import { HiMenuAlt3, HiMenuAlt1 } from 'react-icons/hi';
import ResponsiveMenu from './ResponsiveMenu';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  // Scroll behavior
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setShowNavbar(false); // Hide navbar when scrolling down
      } else {
        setShowNavbar(true); // Show navbar when scrolling up
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <div
      className={`bg-gray-950 z-50 w-full py-3 fixed p-4 transition-transform duration-500 ${
        showNavbar ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className="flex items-center justify-between max-w-7xl mx-auto px-4 md:px-0">
        {/* logo */}
        <div data-aos="fade-down" data-aos-offset="500">
          <a className="text-white text-xl font-semibold" href="/">
            Ashis Sahu
          </a>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:block">
          <ul
            data-aos="fade-down"
            data-aos-offset="500"
            className="flex gap-5 text-xl items-center font-semibold text-white"
          >
            <a href="/"><li className="cursor-pointer">Home</li></a>
            <a href="#about"><li className="cursor-pointer">About</li></a>
            <a href="#education"><li className="cursor-pointer">Education & Experience</li></a>
            <a href="#project"><li className="cursor-pointer">Projects</li></a>
            <a href="#contact">
              <button className="px-3 py-1 cursor-pointer rounded-md bg-blue-500 text-white flex items-center gap-1 shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#33CCCC,0_0_15px_#33CCCC,0_0_30px_#33CCCC] shadow-blue-500 border-blue-400 border-2">
                Contact <FaChevronRight />
              </button>
            </a>
          </ul>
        </nav>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden text-white text-4xl">
          {showMenu ? <HiMenuAlt3 onClick={toggleMenu} /> : <HiMenuAlt1 onClick={toggleMenu} />}
        </div>
      </div>

      {/* Mobile Responsive Menu */}
      <ResponsiveMenu showMenu={showMenu} setShowMenu={setShowMenu} />
    </div>
  );
};

export default Navbar;
