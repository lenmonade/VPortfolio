import React, { useState, useEffect } from "react";
import useTypingEffect from "../hook/useTypingEffect";

// Example taglines — you can edit/expand these
const TAGLINES = [
  "  AI Enthusiast",
  " Machine Learning Explorer",
  " Frontend Developer",
  " UI/UX Designer",
  " Software Developer",
  " Data Enthusiast"
];

function Hero() {
  const [idx, setIdx] = useState(0);
  const typedText = useTypingEffect(TAGLINES[idx], 80); // 80ms per letter

  // Cycle through taglines every 4s after typing finishes
  useEffect(( ) => {
    const timeout = setTimeout(() => {
      setIdx((prev) => (prev + 1) % TAGLINES.length);
    }, TAGLINES[idx].length * 80 + 2000); // typing duration + pause
    return () => clearTimeout(timeout);
  }, [idx]);

  return (
    <section 
      id="hero" // Ditambahkan untuk navigasi yang tepat
      // FIX: Padding horizontal dikurangi (px-6) dan min-h-screen untuk kompatibilitas
      className="mx-auto max-w-7xl px-6 md:px-24 lg:px-32 min-h-screen flex flex-col justify-center"
    >
      {/* Name */}
      <h1 
        // FIX: Ukuran font di mobile (text-4xl) agar tidak meluber
        className="font-Merriweather text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-indigo-900 mb-4 md:mb-6 leading-tight"
      >
        Josephine Valencia David
      </h1>

      {/* Tagline */}
      <p 
        // FIX: Ukuran font tagline di mobile (text-2xl)
        className="font-serif italic text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-8 md:mb-12 text-indigo-900 text-left"
      >
        {typedText}
        <span 
          // FIX: Tinggi kursor disesuaikan (h-6)
          className="inline-block w-1 bg-indigo-900 h-6 md:h-10 lg:h-12 ml-1 align-middle animate-pulse"
        ></span>
      </p>

      {/* CTA Buttons */}
      <div 
        // FIX: Tombol menumpuk vertikal (flex-col) di mobile dan memanjang (w-full)
        className="flex flex-col sm:flex-row items-center gap-4"
      >
        <a
          href="/CV_JVD.pdf"
          // FIX: Padding dan lebar tombol disesuaikan untuk mobile (px-6 py-2, w-full)
          className="w-full sm:w-auto text-center inline-flex items-center justify-center rounded-full border-2 border-indigo-900 text-indigo-900 px-6 py-2 text-base font-medium hover:bg-indigo-50 transition"
        >
          Download CV
        </a>

        <a
          href="https://linktr.ee/valenciadavid"
          // FIX: Padding dan lebar tombol disesuaikan untuk mobile (px-6 py-2, w-full)
          className="w-full sm:w-auto text-center inline-flex items-center justify-center rounded-full border-2 border-indigo-900 text-indigo-900 px-6 py-2 text-base font-medium hover:bg-indigo-50 transition"
        >
          Let's Connect
        </a>
      </div>

      {/* Scroll Indicator */}
      <a
        href="#profile"
        // FIX: Posisi indikator dinaikkan sedikit (bottom-16)
        className="absolute bottom-16 sm:bottom-28 left-1/2 -translate-x-1/2 transform animate-bounce cursor-pointer scroll-smooth"
      >
        <svg
          // FIX: Ukuran ikon dikurangi di mobile (w-8 h-8)
          className="w-8 h-8 md:w-10 md:h-10 text-indigo-900 hover:opacity-80 transition"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M19 9l-7 7-7-7" />
        </svg>
      </a>

    </section>
  );
}

export default Hero;