import React from "react";

export default function Footer() {
  return (
    <footer
      id="contact"
      className="w-full bg-[#FEF6F7] border-t border-gray-200 mt-16 py-6"
    >
      <div
        className="w-full max-w-7xl mx-auto px-6 
                   flex flex-col sm:flex-row items-center justify-between 
                   gap-3 text-gray-600 text-sm"
      >
        {/* Left: Copyright */}
        <p className="text-center sm:text-left">
          © 2025 <span className="font-medium text-gray-800">Valencia David</span>. All rights reserved.
        </p>

        {/* Right: Links */}
        <div className="flex items-center gap-4">
          <a
            href="https://www.linkedin.com/in/josephine-valencia-david/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-4 text-indigo-900 hover:text-indigo-700 transition-colors duration-200"
          >
            LinkedIn
          </a>
          <a
            href="mailto:josephinevalenciad@gmail.com"
            className="underline underline-offset-4 text-indigo-900 hover:text-indigo-700 transition-colors duration-200"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
