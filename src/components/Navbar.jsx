import React, { useState } from "react";
import { motion } from "framer-motion";

const navItems = [
  { href: "#profile", label: "Profile" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
];

const MenuIcon = (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
  </svg>
);

const CloseIcon = (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
  </svg>
);

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="sticky top-0 z-40 bg-[#FEF6F7]/90 backdrop-blur-md border-b border-gray-200 w-full"
    >
      {/* Full width container */}
      <div className="w-full flex items-center justify-between h-16 px-6 sm:px-10">
        
        {/* Logo */}
        <a href="#" className="flex items-center gap-2">
          <img src="/logo.svg" alt="Logo" className="w-8 h-8 object-contain" />
        </a>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-10 text-[15px] font-medium">
          {navItems.map((it) => (
            <a
              key={it.href}
              href={it.href}
              className="text-indigo-900 hover:text-indigo-600 transition-colors duration-300"
            >
              {it.label}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-indigo-900 focus:outline-none"
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? CloseIcon : MenuIcon}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-[#FEF6F7] border-t border-gray-200 fixed w-full top-16 h-[calc(100vh-4rem)] overflow-y-auto"
        >
          <nav className="flex flex-col space-y-1 px-4 pb-4 pt-2">
            {navItems.map((it) => (
              <a
                key={it.href}
                href={it.href}
                onClick={toggleMenu}
                className="block py-3 px-3 text-lg font-semibold text-indigo-900 hover:bg-indigo-100/50 hover:text-indigo-700 rounded-lg transition-colors duration-200"
              >
                {it.label}
              </a>
            ))}
          </nav>
        </motion.div>
      )}
    </motion.header>
  );
}

export default Navbar;
