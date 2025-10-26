import React, { useRef, useEffect, useState } from "react";
// import { m } from "framer-motion"; // m is not used, but kept for context

// The project data has been updated based on your list.
const projects = [
  {
    id: 1,
    title: "Portfolio Website",
    desc: "My personal portfolio website, built with React and styled using Tailwind CSS, showcasing my experience, projects, and technical skills. This project solidified my modern frontend development workflow.",
    tags: ["React Native", "Tailwind CSS", "Frontend", "Node.js"],
    image: "/Portfolio.png",
    url: "https://valenciadavid.vercel.app/"
  },
  {
    id: 2,
    title: "Saferime - UI/UX Prototype",
    desc: "A UI/UX design for a mobile prototype created for a team competition. It proposes a solution to help prevent crime through AI integration and real-time collaboration with local law enforcement.",
    tags: ["Figma", "UI/UX", "Mobile Design", "Competition"],
    image: "/Saferime.png",
    url: "https://www.figma.com/design/pB7f55JrPoRL2z99XlP3Jf/Saferime?node-id=0-1&m=dev&t=0dOpQhKoyn20ovFA-1"
  },
  {
    id: 3,
    title: "Sortify - CNN Waste Classifier",
    desc: "A web-based platform developed as a team class project, featuring a Machine Learning model (CNN with PyTorch) designed to classify waste into six categories for improved recycling accuracy.",
    tags: ["PyTorch", "CNN", "Machine Learning", "Python", "Class Project"],
    image: "/Sortify.png",
    url: "https://github.com/Ud1nS/Sortify"
  },
  {
    id: 4,
    title: "FlowerSnap - ResNet18 Classifier",
    desc: "A Machine Learning model built for a web-based platform (using HTML, CSS, and Python) that employs ResNet18 transfer learning to classify five types of flowers. (Team class project).",
    tags: ["ResNet18", "Transfer Learning", "Python", "Web Platform", "Class Project"],
    image: "/Flowersnap.png"
  },
  {
    id: 5,
    title: "Renfit - Sustainable Rental Platform (Top 10 Finalist)",
    desc: "A website designed during a team competition focused on renting outfits to reduce textile waste and provide an alternative to fast fashion. Built with HTML, CSS, and JavaScript.",
    tags: ["HTML", "CSS", "JavaScript", "Figma", "Competition"],
    image: "/Renfit.png",
    url: "https://www.figma.com/design/hR7nxnAWV2OQXVaQzCobZF/Renfit-SnapUI?node-id=0-1&m=dev&t=cLQx9doRA6f3CTlx-1"
  },
  {
    id: 6,
    title: "Stuggy - React Native Study App",
    desc: "A feature-rich mobile study planner app (team class project) including a Pomodoro timer, priority lists, reminders, and a discussion forum, utilizing React Native and Supabase for backend services.",
    tags: ["React Native", "Visual Studio Code","Figma", "GitHub","Supabase", "Mobile Dev", "Expo Go", "Class Project"], 
    image: "/Stuggy.png",
    url: "https://github.com/Ripupz/stuggy_app"
  },
  {
    id: 7,
    title: "Nukaran - UI/UX Prototype",
    desc: "A mobile prototype created for a team competition, designed to facilitate the exchange of used items with a unique social and gamified element. Developed using Figma.",
    tags: ["Figma", "UI/UX", "Mobile Prototype", "Competition"],
    image: "/Nukaran.png",
    url: "https://www.figma.com/design/4bRtCajkSmqDbsfaEnCysa/UI-UX-Fortex-SnapUI?node-id=52-2&m=dev&t=oTXIWPr3kJBA5VKX-1"
  },
];

const SCROLL_CONTAINER_ID = 'scrollable-project-track';

function Projects() {
  const scrollRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0); 

  // Class names for card widths
  // ADJUSTED: Mengubah w-[70vw] menjadi w-[80vw] untuk memberikan ruang yang sedikit lebih besar di mobile (tapi masih scrollable)
  const CARD_WIDTH_CLASSES = 'w-[80vw] sm:w-[50vw] md:w-[350px] lg:w-[400px]';

  // --- Fungsi yang Disempurnakan untuk Scroll ke Kartu Tertentu ---
  const scrollToCard = (index) => {
    const container = scrollRef.current;
    if (container && index >= 0 && index < projects.length) {
      const cardId = `project-${index}`;
      const cardElement = container.querySelector(`#${cardId}`);

      if (cardElement) {
        cardElement.scrollIntoView({ 
          behavior: 'smooth', 
          inline: 'center', 
          block: 'nearest' 
        });
        setActiveIndex(index); 
      }
    }
  };

  const handleNext = () => {
    if (activeIndex < projects.length - 1) {
      scrollToCard(activeIndex + 1);
    }
  };

  const handlePrev = () => {
    if (activeIndex > 0) {
      scrollToCard(activeIndex - 1);
    }
  };
  // ----------------------------------------


  // Fungsi untuk menangani scroll dan memperbarui activeIndex berdasarkan pemusatan
  const handleScroll = () => {
    const container = scrollRef.current;
    if (!container) return;

    const containerWidth = container.offsetWidth;
    const viewportCenter = container.scrollLeft + (containerWidth / 2);
    
    const cards = container.querySelectorAll('article');
    if (cards.length === 0) return;

    let newActiveIndex = -1;
    let minDistance = Infinity;
    
    cards.forEach((card, index) => {
      const cardRect = card.getBoundingClientRect();
      const containerRect = container.getBoundingClientRect();
      
      const cardCenterInScroll = container.scrollLeft + cardRect.left + (cardRect.width / 2) - containerRect.left;
      
      const distanceToCenter = Math.abs(cardCenterInScroll - viewportCenter);

      if (distanceToCenter < minDistance) {
        minDistance = distanceToCenter;
        newActiveIndex = index;
      }
    });
    
    if (newActiveIndex !== -1 && newActiveIndex !== activeIndex) {
      setActiveIndex(newActiveIndex);
    }
  };

  // Fungsi untuk menangani klik pada kartu: scroll ke tengah
  const handleCardClick = (e, index) => {
    e.preventDefault();
    scrollToCard(index); 
  };

  useEffect(() => {
  const container = scrollRef.current;
  if (!container) return;

  let scrollTimeout;

  const handleDebouncedScroll = () => {
    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(handleScroll, 150);
  };

  container.addEventListener("scroll", handleDebouncedScroll);

  // ✅ FIX: Remove the line that forces scrollToCard(0)
  // ✅ Instead, just make sure the horizontal scroll starts at left = 0
  //    without triggering page jump.
  requestAnimationFrame(() => {
    container.scrollTo({
      left: 0,
      behavior: "instant" || "auto", // ensures it doesn't animate the whole page
    });
  });

  return () => {
    container.removeEventListener("scroll", handleDebouncedScroll);
    clearTimeout(scrollTimeout);
  };
}, []);


  // Fungsi untuk menerapkan style dinamis untuk scale dan opacity
  const getCardStyles = (index) => {
    const isActive = index === activeIndex;
    const scale = isActive ? 1.05 : 0.9; 
    const opacity = isActive ? 1 : 0.6; 
    
    const style = {
      transform: `scale(${scale})`,
      opacity: opacity,
      transition: 'transform 0.3s ease-out, opacity 0.3s ease-out', 
      boxShadow: isActive ? '0 10px 25px rgba(0, 0, 0, 0.15)' : '0 1px 3px rgba(0, 0, 0, 0.05)',
    };
    
    return style;
  };


  return (
    <section id="projects" className="mx-auto max-w-6xl py-8 md:py-20">
      {/* Centered "Projects" title */}
      <div className="text-left mb-8 px-4">
        <h2 className="font-serif text-5xl md:text-6xl mb-12 text-indigo-900 italic font-medium tracking-tight">
          Projects
        </h2>
      </div>
      
      {/* Project count indicator */}
      <p className="text-center mb-6 text-lg">
        <span className="inline-block bg-white text-indigo-950 dark:bg-indigo-950 dark:text-white px-10 py-1 rounded-full shadow-md font-medium border border-gray-100 dark:border-gray-600">
          {activeIndex + 1} of {projects.length} projects
        </span>
      </p>


      {/* Container to handle the horizontal scrolling and scrollbar hiding */}
      <div className="relative">
        
        {/* Scrollbar-Hiding Style Block */}
        <style>{`
          #${SCROLL_CONTAINER_ID}::-webkit-scrollbar {
            display: none;
          }
          #${SCROLL_CONTAINER_ID} {
            -ms-overflow-style: none;  /* IE and Edge */
            scrollbar-width: none;  /* Firefox */
          }
        `}</style>
        
        {/* --- PREVIOUS Button (Diberi warna teks default) --- */}
        <button
          onClick={handlePrev}
          disabled={activeIndex === 0}
          className={`
            absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full 
            bg-white/90 shadow-xl border border-gray-100 transition-all duration-300
            text-indigo-950 // FIX: Tambahkan warna teks default
            hover:bg-indigo-950 hover:text-white disabled:opacity-50 disabled:cursor-not-allowed
            hidden sm:block
          `}
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
        </button>

        {/* --- NEXT Button (Diberi warna teks default) --- */}
        <button
          onClick={handleNext}
          disabled={activeIndex === projects.length - 1}
          className={`
            absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full 
            bg-white/90 shadow-xl border border-gray-100 transition-all duration-300
            text-indigo-950 // FIX: Tambahkan warna teks default
            hover:bg-indigo-950 hover:text-white disabled:opacity-50 disabled:cursor-not-allowed
            hidden sm:block
          `}
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
        </button>


        {/* Scrollable Track */}
        <div
          id={SCROLL_CONTAINER_ID}
          ref={scrollRef} // Attach ref here
          // ADJUSTED: Padding horizontal dikurangi untuk memberikan ruang lebih pada cards.
          className="flex gap-4 overflow-x-scroll pb-4 pt-2 scroll-smooth snap-x snap-mandatory items-center px-4"
        >
        
          
          {projects.map((p, index) => (
            <article
              key={p.id}
              id={`project-${index}`} // Unique ID for scrollIntoView
              // Menggunakan CARD_WIDTH_CLASSES yang sudah diperbarui
              className={`flex-shrink-0 ${CARD_WIDTH_CLASSES} border p-4 sm:p-6 bg-white dark:bg-[#17266A] rounded-2xl shadow-lg hover:shadow-xl snap-center cursor-pointer active:cursor-grabbing
                
                ${index === 0 ? 'scroll-ml-[calc(50vw-40vw-16px)] sm:scroll-ml-[calc(50vw-25vw-16px)] md:scroll-ml-[calc(50vw-175px-16px)] lg:scroll-ml-[calc(50vw-200px-16px)]' : ''}
                ${index === projects.length - 1 ? 'scroll-mr-[calc(50vw-40vw-16px)] sm:scroll-mr-[calc(50vw-25vw-16px)] md:scroll-mr-[calc(50vw-175px-16px)] lg:scroll-mr-[calc(50vw-200px-16px)]' : ''}
              `}
              style={getCardStyles(index)} // Apply dynamic styles
              onClick={(e) => handleCardClick(e, index)} // Click handler
            >
              {/* Thumbnail placeholder */}
              {/* ADJUSTED: Mengurangi tinggi placeholder image untuk mobile (h-40) */}
              <div className="h-40 sm:h-48 rounded-xl bg-gray-100 dark:bg-indigo-900 mb-3 sm:mb-4 flex items-center justify-center overflow-hidden">
                <img src={p.image} alt={p.title} className="w-full h-full object-cover" />
              </div>

              {/* Project title + desc */}
              <h3 className="font-semibold text-lg sm:text-xl mb-1 text-[#17266A] dark:text-white">{p.title}</h3>
              {/* ADJUSTED: Ukuran font deskripsi dikurangi ke text-xs untuk mobile */}
              <p className="text-xs sm:text-sm leading-relaxed text-[#17266A] dark:text-gray-300">{p.desc}</p>

              {/* Tags */}
              <div className="mt-2 flex flex-wrap gap-1">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    // ADJUSTED: Menggunakan px-2 py-0.5 text-xs (sudah kecil, tapi memastikan)
                    className="inline-flex items-center rounded-full border border-blue-200 bg-blue-50 text-blue-900 px-2 py-0.5 text-xs font-medium"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* CTA */}
              <div className="mt-3">
                <a
                  href={p.url} 
                  onClick={(e) => e.stopPropagation()} 
                  // ADJUSTED: Padding dan font CTA dikurangi untuk mobile
                  className="inline-flex items-center rounded-lg bg-[#17266A] text-white px-3 py-1.5 text-xs sm:text-sm font-medium hover:bg-indigo-900 transition shadow-lg"
                >
                  View Project
                  <svg className="ml-1 h-3 w-3 sm:h-4 sm:w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                </a>
              </div>
            </article>
          ))}
          
          <div className="flex-shrink-0 w-0 h-1"></div>
        </div>
      </div>
    </section>
  );
}

export default Projects;