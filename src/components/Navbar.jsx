import React from "react";
import { motion } from "framer-motion";

const navItems = [
  { href: "#profile", label: "Profile" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

function Navbar() {
  return (
    <motion.header
  initial={{ y: -80, opacity: 0 }}
  animate={{ y: 0, opacity: 1 }}
  transition={{ duration: 0.6, ease: "easeOut" }}
  className="sticky top-0 z-30 bg-[#FEF6F7]/80 backdrop-blur border-b border-gray-200"
>
  <div className="w-full flex items-center justify-between py-4">
    {/* Logo */}
    <div className="flex items-center gap-2">
      <img 
        src="src/assets/logo.svg" 
        alt="Logo" 
        className="w-8 h-8 object-contain" 
      />
    </div>

    {/* Nav Items */}
    <nav className="hidden md:flex items-center gap-8 text-[15px] font-medium">
      {navItems.map((it) => (
        <a
          key={it.href}
          href={it.href}
          className="relative text-blue-900 hover:text-blue-600 transition-colors duration-300"
        >
          {it.label}
        </a>
      ))}
    </nav>
  </div>
</motion.header>

  );
}

export default Navbar;

// function Navbar() {
//   return (
//     <header className="sticky top-0 z-30 bg-background/80 backdrop-blur border-b border-border">
//       <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
//         <div className="flex items-center gap-2">
//           <img src="src/assets/logo.svg" width={24} height={24} alt="Logo" className="shrink-0" />
//           {/* <span className="sr-only">Home</span> */}
//         </div>
//         <nav className="hidden md:flex items-center gap-6 text-sm">
//           {navItems.map((it) => (
//             <a key={it.href} href={it.href} className="hover:underline underline-offset-4">
//               {it.label}
//             </a>
//           ))}
//         </nav>
//       </div>
//     </header>
//   );
// }

// export default Navbar;