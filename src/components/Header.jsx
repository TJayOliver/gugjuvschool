import { useState } from "react";
import { IoCall } from "react-icons/io5";
import { HiMenu, HiX } from "react-icons/hi";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full sticky top-0 z-50 bg-white/90 backdrop-blur shadow">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo / Name */}
        <h1 className="text-lg md:text-2xl font-bold text-[#004242] bebas-neue-regular">
          Guggisberg Juvenile International School
        </h1>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-6 text-[#004242] font-medium">
          <a href="#about" className="hover:text-blue-600">
            About
          </a>
          <a href="#contact" className="hover:text-blue-600">
            Contact
          </a>
        </nav>

        {/* Call Info (hidden on small screens) */}
        <div className="hidden md:flex items-center gap-3">
          <IoCall color="blue" size={20} />
          <div className="flex flex-col leading-tight">
            <p className="text-xs opacity-70">Have any questions?</p>
            <p className="font-medium">Call: +233241959465</p>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden p-2" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <HiX size={24} /> : <HiMenu size={24} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white px-6 pb-4 flex flex-col gap-4 border-t">
          <a href="#about" className="hover:text-blue-600">
            About
          </a>
          <a href="#contact" className="hover:text-blue-600">
            Contact
          </a>
          <div className="flex items-center gap-2 pt-2 border-t">
            <IoCall color="blue" size={20} />
            <span className="text-sm font-medium">+233241959465</span>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
