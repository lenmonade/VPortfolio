import React, { useState, useEffect } from "react";
import useTypingEffect from "../hook/useTypingEffect";

// Example taglines — you can edit/expand these
const TAGLINES = [
  "  AI Enthusiast",
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
    <section className="mx-auto max-w-7xl px-12 md:px-24 lg:px-32 h-screen flex flex-col justify-center transform -translate-y-12">
  {/* Name */}
  <h1 className="font-Merriweather text-5xl md:text-6xl lg:text-7xl text-indigo-900 mb-6 leading-tight">
    Josephine Valencia David
  </h1>

  {/* Tagline */}
  <p className="font-serif italic text-3xl md:text-4xl lg:text-5xl mb-12 text-indigo-900 text-left">
    {typedText}
    <span className="inline-block w-1 bg-indigo-900 h-8 md:h-10 lg:h-12 ml-1 align-middle animate-pulse"></span>
  </p>

  {/* CTA Buttons */}
  <div className="flex items-center gap-4">
    <a
      href="https://linktr.ee/valenciadavid"
      target="_blank"
      rel="noreferrer"
      className="inline-flex items-center rounded-full bg-indigo-900 text-white px-8 py-3 text-base font-medium hover:opacity-90 transition"
    >
      Let&apos;s connect!
    </a>

    <a
      href="/cv.pdf"
      className="inline-flex items-center rounded-full border-2 border-indigo-900 text-indigo-900 px-8 py-3 text-base font-medium hover:bg-indigo-50 transition"
    >
      Download CV
    </a>
  </div>

  {/* Scroll Indicator */}
  <a
  href="#profile"
  className="absolute bottom-28 left-1/2 -translate-x-1/2 transform animate-bounce cursor-pointer scroll-smooth"
>
  <svg
    className="w-10 h-10 text-indigo-900 hover:opacity-80 transition"
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