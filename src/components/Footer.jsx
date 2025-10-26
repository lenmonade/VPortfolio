import React from "react"

export default function Footer() {
  return (
    <footer id="contact" className="mt-16 border-t border-gray-200">
      <div className="mx-auto max-w-6xl px-4 py-8 
        flex flex-col sm:flex-row 
        items-center justify-between 
        space-y-4 sm:space-y-0 
        text-gray-600"
      >
        {/* FIX: Terapkan warna teks dasar (text-gray-600) pada div luar */}
        <p className="text-sm order-2 sm:order-1 text-center sm:text-left">
          © 2025 Valencia David. All rights reserved.
        </p>
        <div className="flex items-center gap-3 order-1 sm:order-2">
          <a
            href="https://www.linkedin.com/in/josephine-valencia-david/"
            target="_blank"
            rel="noopener noreferrer"
            // FIX: Ganti text-gray-600 default (dari parent) dengan text-indigo-900
            className="underline underline-offset-4 text-sm transition-colors duration-200 text-indigo-900 hover:text-indigo-800"
          >
            LinkedIn
          </a>
          <a
            href="mailto:josephinevalenciad@gmail.com"
            // FIX: Ganti text-gray-600 default (dari parent) dengan text-indigo-900
            className="underline underline-offset-4 text-sm transition-colors duration-200 text-indigo-900 hover:text-indigo-800"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  )
}
