
"use client"
import Link from 'next/link';
import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <nav className="bg-white shadow">
      <div className="container mx-auto flex justify-between items-center py-4 px-4">
        <div className="text-xl font-bold text-black">Brand</div>
        <div className="block lg:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            {/* Hamburger Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
        {/* Desktop Navigation */}
        <div className="hidden lg:flex lg:items-center lg:gap-10 font-medium text-black">
          <Link className="navbar__link" href="/">HOME</Link>
          <Link className="navbar__link" href="/categories">CATEGORIES</Link>
          <Link className="navbar__link" href="/men">MEN'S</Link>
          <Link className="navbar__link" href="/woman">WOMAN'S</Link>
          <Link className="navbar__link" href="/Jewelry">JEWELRY</Link>
          <Link className="navbar__link" href="/perfume">PERFUME</Link>
          <Link className="navbar__link" href="/ordernow">ORDER NOW</Link>
          <Link className="navbar__link" href="/contactus">CONTACT US</Link>
        </div>
      </div>
      {/* Mobile Navigation */}
      {isOpen && (
        <div className="lg:hidden bg-gray-300 shadow-md p-4">
          <div className="flex flex-col gap-4">
            <Link className="navbar__link" href="/">HOME</Link>
            <Link className="navbar__link" href="/categories">CATEGORIES</Link>
            <Link className="navbar__link" href="/men">MEN'S</Link>
            <Link className="navbar__link" href="/woman">WOMAN'S</Link>
            <Link className="navbar__link" href="/Jewelry">JEWELRY</Link>
            <Link className="navbar__link" href="/perfume">PERFUME</Link>
            <Link className="navbar__link" href="/ordernow">ORDER NOW</Link>
            <Link className="navbar__link" href="/contactus">CONTACT US</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
