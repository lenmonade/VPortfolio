import React, { useRef, useEffect, useState } from "react";

// The project data has been updated based on your list.
const projects = [
  {
    id: 1,
    title: "Portfolio Website",
    desc: "My personal portfolio website, built with React and styled using Tailwind CSS, showcasing my experience, projects, and technical skills. This project solidified my modern frontend development workflow.",
    tags: ["React", "Tailwind CSS", "Frontend"],
    image: "https://via.placeholder.com/400x250/FF6B6B/FFFFFF?text=Portfolio"
  },
  {
    id: 2,
    title: "Saferime (UI/UX Prototype)",
    desc: "A UI/UX design for a mobile prototype created for a team competition. It proposes a solution to help prevent crime through AI integration and real-time collaboration with local law enforcement.",
    tags: ["Figma", "UI/UX", "Mobile Design", "Competition"],
    image: "https://via.placeholder.com/400x250/6BBFFF/FFFFFF?text=Saferime"
  },
  {
    id: 3,
    title: "Sortify (CNN Waste Classifier)",
    desc: "A web-based platform developed as a team class project, featuring a Machine Learning model (CNN with PyTorch) designed to classify waste into six categories for improved recycling accuracy.",
    tags: ["PyTorch", "CNN", "Machine Learning", "Python"],
    image: "https://via.placeholder.com/400x250/FFD166/FFFFFF?text=Sortify"
  },
  {
    id: 4,
    title: "FlowerSnap (ResNet18 Classifier)",
    desc: "A Machine Learning model built for a web-based platform (using HTML, CSS, and Python) that employs ResNet18 transfer learning to classify five types of flowers. (Team class project).",
    tags: ["ResNet18", "Transfer Learning", "Python", "Web Platform"],
    image: "https://via.placeholder.com/400x250/06D6A0/FFFFFF?text=FlowerSnap"
  },
  {
    id: 5,
    title: "Renfit (Sustainable Rental Platform)",
    desc: "A website designed during a team competition focused on renting outfits to reduce textile waste and provide an alternative to fast fashion. Built with HTML, CSS, and JavaScript.",
    tags: ["HTML", "CSS", "JavaScript", "Figma", "Competition"],
    image: "https://via.placeholder.com/400x250/F8D6E3/FFFFFF?text=Renfit"
  },
  {
    id: 6,
    title: "Stuggy (React Native Study App)",
    desc: "A feature-rich mobile study planner app (team class project) including a Pomodoro timer, priority lists, reminders, and a discussion forum, utilizing React Native and Supabase for backend services.",
    tags: ["React Native", "Supabase", "Mobile Dev", "Expo Go"],
    image: "https://via.placeholder.com/400x250/A3A0F5/FFFFFF?text=Stuggy"
  },
  {
    id: 7,
    title: "Nukaran (Used Item Exchange Prototype)",
    desc: "A mobile prototype created for a team competition, designed to facilitate the exchange of used items with a unique social and gamified element. Developed using Figma.",
    tags: ["Figma", "UI/UX", "Mobile Prototype", "Competition"],
    image: "https://via.placeholder.com/400x250/80ED99/FFFFFF?text=Nukaran"
  },
];

const SCROLL_CONTAINER_ID = 'scrollable-project-track';

function Projects() {
  const scrollRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0); // State to track the active/centered card

  // Class names for card widths
  const CARD_WIDTH_CLASSES = 'w-[70vw] sm:w-[50vw] md:w-[350px] lg:w-[400px]';

  // Function to handle scroll and update activeIndex based on centering
  const handleScroll = () => {
    const container = scrollRef.current;
    if (!container) return;

    const containerWidth = container.offsetWidth;
    const viewportCenter = container.scrollLeft + (containerWidth / 2);
    
    // Select all project articles (excluding the invisible spacers)
    const cards = container.querySelectorAll('article');
    if (cards.length === 0) return;

    let newActiveIndex = -1;
    let minDistance = Infinity;
    
    cards.forEach((card, index) => {
      // Calculate the card's center position relative to the scrollable container's content start
      const cardRect = card.getBoundingClientRect();
      const containerRect = container.getBoundingClientRect();
      
      const cardCenterInScroll = container.scrollLeft + cardRect.left + (cardRect.width / 2) - containerRect.left;
      
      // Calculate the distance between the card's center and the viewport's center
      const distanceToCenter = Math.abs(cardCenterInScroll - viewportCenter);

      // Find the card closest to the center
      if (distanceToCenter < minDistance) {
        minDistance = distanceToCenter;
        newActiveIndex = index;
      }
    });
    
    // Update active index if a new closest card is found
    if (newActiveIndex !== -1 && newActiveIndex !== activeIndex) {
      setActiveIndex(newActiveIndex);
    }
  };

  // Function to handle clicking on a card: scrolls it to the center
  const handleCardClick = (e, index) => {
    e.preventDefault();
    const container = scrollRef.current;
    if (!container) return;

    // Use a unique ID structure to find the clicked card element
    const cardId = `project-${index}`;
    const cardElement = container.querySelector(`#${cardId}`);

    if (cardElement) {
      cardElement.scrollIntoView({ 
        behavior: 'smooth', 
        inline: 'center', 
        block: 'nearest' 
      });
      // Immediately set the active index on click for instant visual feedback
      setActiveIndex(index); 
    }
  };

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    // Use a small delay on scroll end to ensure the browser has finished snapping
    let scrollTimeout;
    const handleDebouncedScroll = () => {
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(handleScroll, 150); 
    };

    container.addEventListener('scroll', handleDebouncedScroll);
    
    // --- FIX: Initial Scroll to Project 1 (Index 0) ---
    // This runs once after mount to ensure Project 1 is centered and highlighted.
    const initialScroll = () => {
        const cardElement = container.querySelector('#project-0');
        if (cardElement) {
             cardElement.scrollIntoView({ 
                behavior: 'smooth', 
                inline: 'center', 
                block: 'nearest' 
            });
            setActiveIndex(0);
        }
    }
    
    // Run initial scroll slightly delayed to ensure DOM is ready and calculations are correct
    setTimeout(initialScroll, 100);

    return () => {
      container.removeEventListener('scroll', handleDebouncedScroll);
      clearTimeout(scrollTimeout);
    };
  }, []); // Empty dependency array ensures this runs once

  // Function to apply dynamic styles for scale and opacity
  const getCardStyles = (index) => {
    const isActive = index === activeIndex;
    const scale = isActive ? 1.05 : 0.9; 
    const opacity = isActive ? 1 : 0.6; 
    
    const style = {
      transform: `scale(${scale})`,
      opacity: opacity,
      transition: 'transform 0.3s ease-out, opacity 0.3s ease-out', 
      // Add a slight box shadow for better highlight effect
      boxShadow: isActive ? '0 10px 25px rgba(0, 0, 0, 0.15)' : '0 1px 3px rgba(0, 0, 0, 0.05)',
    };
    
    return style;
  };


  return (
    <section id="projects" className="mx-auto max-w-6xl py-8 md:py-20">
      {/* Centered "Projects" title and the small separator line */}
      <div className="text-center mb-8">
        <h2 className="font-serif text-5xl md:text-6xl mb-12 text-indigo-900 italic font-medium tracking-tight text-left">
          Projects
        </h2>
      </div>
      
      {/* Project count indicator, always present */}
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

        {/* Scrollable Track: Uses flex, gap, and overflow-x-scroll 
            Added px-4 to the container for better edge visibility
        */}
        <div
          id={SCROLL_CONTAINER_ID}
          ref={scrollRef} // Attach ref here
          // snap-mandatory ensures the scroll snaps to the center of an item.
          className="flex gap-6 overflow-x-scroll pb-4 pt-2 scroll-smooth snap-x snap-mandatory items-center px-4"
        >
        
          
          {projects.map((p, index) => (
            <article
              key={p.id}
              id={`project-${index}`} // Unique ID for scrollIntoView
              // Fixed card width. snap-center ensures it snaps to the middle of the container
              // Added scroll-mx-[--center-margin] to the first and last cards to center them
              className={`flex-shrink-0 ${CARD_WIDTH_CLASSES} border p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl snap-center cursor-pointer active:cursor-grabbing
                ${index === 0 ? 'scroll-ml-[calc(50vw-35vw)] sm:scroll-ml-[calc(50vw-25vw)] md:scroll-ml-[calc(50vw-175px)] lg:scroll-ml-[calc(50vw-200px)]' : ''}
                ${index === projects.length - 1 ? 'scroll-mr-[calc(50vw-35vw)] sm:scroll-mr-[calc(50vw-25vw)] md:scroll-mr-[calc(50vw-175px)] lg:scroll-mr-[calc(50vw-200px)]' : ''}
              `}
              style={getCardStyles(index)} // Apply dynamic styles
              onClick={(e) => handleCardClick(e, index)} // Click handler
            >
              {/* Thumbnail placeholder */}
              <div className="h-48 rounded-xl bg-gray-100 dark:bg-gray-700 mb-4 flex items-center justify-center overflow-hidden">
                {/* Placeholder Image is now the background of the div */}
                <img src={p.image} alt={p.title} className="w-full h-full object-cover" />
              </div>

              {/* Project title + desc */}
              <h3 className="font-semibold text-xl mb-2 text-gray-900 dark:text-white">{p.title}</h3>
              <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-300">{p.desc}</p>

              {/* Tags */}
              <div className="mt-3 flex flex-wrap gap-1">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="inline-flex items-center rounded-full border border-blue-200 bg-blue-50 text-blue-700 px-2.5 py-0.5 text-xs font-medium"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* CTA */}
              <div className="mt-4">
                <a
                  href="#"
                  // Prevent click on CTA from triggering the card click handler
                  onClick={(e) => e.stopPropagation()} 
                  className="inline-flex items-center rounded-lg bg-indigo-600 text-white px-4 py-2 text-sm font-medium hover:bg-indigo-700 transition shadow-lg"
                >
                  View Details
                  <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                </a>
              </div>
            </article>
          ))}
          
          {/* We now use scroll-mr on the last card instead of this spacer. */}
          {/* We keep this hidden div to fix any potential floating issues */}
          <div className="flex-shrink-0 w-0 h-1"></div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
