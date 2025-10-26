import React, { useState } from "react"; // 1. Import useState
import { motion } from "framer-motion";

const navItems = [
  { href: "#profile", label: "Profile" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  // { href: "#contact", label: "Contact" },
];

// Hamburger Icon
const MenuIcon = (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
  </svg>
);

// Close Icon (X)
const CloseIcon = (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
  </svg>
);


function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // 2. State for mobile menu

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="sticky top-0 z-30 bg-[#FEF6F7]/90 backdrop-blur-md border-b border-gray-200"
    >
      
      {/* Container for content - Ensures correct padding on mobile/desktop */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> 
        <div className="w-full flex items-center justify-between py-3 md:py-4"> 
          {/* PERBAIKAN: Mengurangi py-4 menjadi py-3 di mobile/default untuk menghemat ruang vertikal */}
          
          {/* Logo */}
          <div className="flex items-center gap-2">
            <img 
              src="/logo.svg" 
              alt="Logo" 
              className="w-8 h-8 object-contain" 
            />
          </div>

          {/* Desktop Nav Items (Visible on md and larger) */}
          <nav className="hidden md:flex items-center gap-8 text-[15px] font-medium">
            {navItems.map((it) => (
              <a
                key={it.href}
                href={it.href}
                className="relative text-indigo-900 hover:text-indigo-600 transition-colors duration-300"
              >
                {it.label}
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button (Visible on small screens) */}
          <button 
            onClick={toggleMenu} 
            className="md:hidden text-indigo-900 focus:outline-none"
            aria-expanded={isMenuOpen}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? CloseIcon : MenuIcon}
          </button>

        </div>
      </div>
      
      {/* Mobile Menu Drawer (Conditionally rendered) */}
      {isMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          // PERBAIKAN: Menambahkan h-screen dan overflow-y-auto untuk mengatasi mode landscape
          className="md:hidden bg-[#FEF6F7] border-t border-gray-200 h-screen overflow-y-auto absolute w-full top-[50px] sm:top-[60px]"
        >
          <nav className="flex flex-col space-y-2 px-4 pb-4 pt-2">
            {navItems.map((it) => (
              <a
                key={it.href}
                href={it.href}
                onClick={toggleMenu} // Close menu when an item is clicked
                className="block py-2 px-3 text-base font-medium text-indigo-900 hover:bg-indigo-50 hover:text-indigo-600 rounded-md transition-colors duration-200"
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
