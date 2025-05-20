import React, { useState } from "react";
import logo from "../assets/logo.png";
import { assets } from "../assets/assets";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [menu, setMenu] = useState("menu");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="h-8" />
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 text-lg font-semibold">
          {["home", "menu", "mobile-app", "contact us"].map((item) => (
            <li
              key={item}
              className={`cursor-pointer capitalize ${
                menu === item ? "text-orange-500" : "text-gray-700"
              } hover:text-orange-600`}
              onClick={() => setMenu(item)}
            >
              {item}
            </li>
          ))}
        </ul>

        {/* Right Icons */}
        <div className="hidden md:flex items-center gap-6">
          <img src={assets.search_icon} alt="Search" className="h-6" />
          <div className="relative">
            <img src={assets.basket_icon} alt="Basket" className="h-6" />
            <div className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></div>
          </div>
          <button className="text-white bg-blue-500 px-4 py-2 rounded hover:bg-blue-600">
            Sign In
          </button>
        </div>

        {/* Hamburger Menu */}
        <div className="md:hidden">
          <button onClick={handleMenuToggle}>
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden px-4 pb-4 space-y-3 bg-white shadow-md">
          {["home", "menu", "mobile-app", "contact us"].map((item) => (
            <div
              key={item}
              className={`cursor-pointer capitalize ${
                menu === item ? "text-orange-500" : "text-gray-700"
              } hover:text-orange-600`}
              onClick={() => {
                setMenu(item);
                setIsMobileMenuOpen(false); // close after click
              }}
            >
              {item}
            </div>
          ))}

          {/* Mobile icons */}
          <div className="flex items-center gap-6 pt-4">
            <img src={assets.search_icon} alt="Search" className="h-6" />
            <div className="relative">
              <img src={assets.basket_icon} alt="Basket" className="h-6" />
              <div className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></div>
            </div>
            <button className="text-white bg-blue-500 px-4 py-1 rounded hover:bg-blue-600">
              Sign In
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
