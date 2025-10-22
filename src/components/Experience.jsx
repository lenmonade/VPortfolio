import React, { useState, useEffect } from 'react';

// --- Icon Definitions ---

// Organization/Leadership Icon: Briefcase 
const OrganizationIcon = (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.864 23.864 0 0112 15c-3.138 0-6.095-.778-8.5-2.255L2 15v5a2 2 0 002 2h16a2 2 0 002-2v-5l-.5-.255z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15V3m0 0a3 3 0 110-6 3 3 0 010 6z" />
  </svg>
);

// Competition/Achievement Icon: Trophy 
const CompetitionIcon = (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2c4.142 0 7.854 1.258 10.618 4.016A12.01 12.01 0 0112 22 11.95 11.95 0 011.382 6.016 11.955 11.955 0 0112 2z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 22s-8-6-8-10c0-4 4-8 8-8s8 4 8 8c0 4-8 10-8 10z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 12a3 3 0 100-6 3 3 0 000 6z" />
  </svg>
);


// --- Data Structure ---
const experiences = [
  {
    // icon: OrganizationIcon,
    title: "Chairman - HISHOT (Himti Seminar Workshop and Study Tour) 2025",
    date: "May 2025 — Present",
    description: "Led the overall planning and execution of HISHOT 2025, HIMTI's annual Seminar, Workshop, and Study Tour program, ensuring an impactful learning experience for students by leading and coordinating the efforts of 9 divisions.",
    tags: ["Leadership", "Event Planning", 'Team Management'],
    image: 'public/HISHOT.JPG',
  },
  {
    // icon: OrganizationIcon,
    title: "Staff of Event Division - HILET (Himti Leadership Training) 2025",
    date: "January 2025 — February 2025",
    description: "Contributed to the planning and execution of HILET (HIMTI Learning and Training) by creating structured PowerPoint presentations and providing assistance to speakers as a Liaison Officer (LO).",
    tags: ["Event Management", "Time Management", "Attention to Detail"],
    image: 'public/HILET.jpg',
  },
  {
    // icon: CompetitionIcon, 
    title: "TOP 10 Finalist - IFEST UNPAD 2024",
    date: "September 2024",
    description: "Competed as part of team SnapUI in IFEST UNPAD’s Web Development competition, presenting Renfit, a website for clothing rental services, and made it to the top 10 finalist — marking significant progress from our first competition together.",
    tags: ["Creativity", "Innovation", "Teamwork"],
    image: 'public/IFEST.jpeg',
  },
  {
    // icon: OrganizationIcon, 
    title: "Coordinator of Art & Design Division- Pengabdian Kepada Masyarakat 2024 - BINUS TV Club",
    date: "April 2024 - July 2024",
    description: "As the Coordinator of the Art & Design Division, I was responsible for leading and managing the division and contributing with team members to the design of publication media, PowerPoints, certificates, and other materials.",
    tags: ["Leadership", "Creativity", "Team Management"],
    image: 'public/BTV.jpg',
  }
];

// --- Sub-Component: Timeline Item ---
const TimelineItem = ({ exp, index, activeIndex, activeDotColor, activeTextColor, inactiveTextColor, accentColor }) => {
  const isActive = activeIndex === index;
  
  return (
    <div 
      key={index} 
      id={`experience-${index}`}
      className="relative pl-12 experience-item transition-all duration-300"
    >
      
      {/* DECORATIVE Timeline dot (Changed from <button> to <div> and removed interactivity/hover effects) */}
      <div
        className={`absolute left-0 top-1 w-4 h-4 rounded-full border-4 z-10 border-white transition-colors duration-300
          ${isActive 
            ? activeDotColor // Active dot (e.g., bg-indigo-900)
            : 'bg-white'    // Inactive dot (bg-white)
          }`}
        aria-hidden="true"
      ></div>
      
      {/* Content Header (Title and Icon) */}
      <div 
        className={`flex items-start gap-3 text-left mb-3 transition-all duration-300 ${isActive ? 'opacity-100' : 'opacity-70'}`}
      >
        {/* Icon container */}
        <div className={`flex-shrink-0 mt-0.5 transition-colors duration-300 ${accentColor}`}>
          {exp.icon}
        </div>
        
        {/* Title */}
        <h3 className={`text-xl md:text-2xl font-bold ${isActive ? activeTextColor : inactiveTextColor}`}>
          {exp.title}
        </h3>
      </div>
      
      {/* Date */}
      <p className={`mb-4 text-base text-left ${inactiveTextColor}`}>{exp.date}</p>
      
      {/* Description - Explicitly set to text-left */}
      <p className={`mb-5 leading-relaxed text-base max-w-full text-left transition-all duration-300 ${
        isActive ? activeTextColor : inactiveTextColor
      }`}>
        {exp.description}
      </p>
      
      {/* Tags */}
      <div className="flex flex-wrap gap-2">
        {exp.tags.map((tag, tagIndex) => (
          <span
            key={tagIndex}
            className={`px-4 py-2 rounded-full text-xs font-semibold shadow-md transition-all duration-300 
              ${isActive 
                ? 'bg-indigo-900 text-white' // Dark accent for active tag
                : 'bg-white text-indigo-700 opacity-90 hover:opacity-100' // Fixed: Used bg-white for clean inactive look
              }`}
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

// --- Main Component ---
const ExperienceTimeline = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Define colors 
  const activeDotColor = 'bg-indigo-900';        
  const activeTextColor = 'text-indigo-900';    
  const inactiveTextColor = 'text-gray-600';  
  const accentColor = 'text-indigo-900';        
  const progressLineColor = 'bg-indigo-900';    
  const baseLineColor = 'bg-indigo-200';        

  // Effect to handle scroll-based activation (Still needed for visual state)
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('.experience-item');
      let current = 0;

      sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();
        const viewportHeight = window.innerHeight;
        const middleOfSection = rect.top + rect.height / 2;
        
        if (middleOfSection > viewportHeight * 0.25 && middleOfSection < viewportHeight * 0.75) {
            current = index;
        }
      });

      setActiveIndex(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); 

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Removed: scrollToExperience function is no longer needed since dots are decorative

  return (
    <div className="min-h-screen font-sans"> 
      <section id="experience" className="mx-auto max-w-7xl px-4 py-16 md:py-24">
        
        {/* SECTION HEADER - Uses Indigo 900 */}
        <h2 className="font-serif text-5xl md:text-6xl mb-12 text-indigo-900 italic font-medium tracking-tight text-left">
          Experience
        </h2>
        
        {/* TWO-COLUMN LAYOUT */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* COLUMN 1: EXPERIENCE TIMELINE */}
          <div className="lg:col-span-2 relative">
            <div className="flex relative">
              
              {/* Vertical Timeline Lines (Base and Progress) */}
              <div className={`absolute left-[7px] top-0 bottom-0 w-[2px] ${baseLineColor}`}></div>
              <div 
                className={`absolute left-[7px] top-0 w-[2px] ${progressLineColor} transition-all duration-500 ease-out`}
                style={{ 
                  height: experiences.length > 1 ? `${(activeIndex / (experiences.length - 1)) * 100}%` : '100%',
                  maxHeight: '100%'
                }}
              ></div>
              
              {/* Experience items list (space-y-24) */}
              <div className="space-y-24 w-full">
                {experiences.map((exp, index) => (
                  <TimelineItem 
                    key={index}
                    exp={exp}
                    index={index}
                    activeIndex={activeIndex}
                    // scrollToExperience removed
                    activeDotColor={activeDotColor}
                    activeTextColor={activeTextColor}
                    inactiveTextColor={inactiveTextColor}
                    accentColor={accentColor}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* COLUMN 2: INDIVIDUAL IMAGE FOR EACH SECTION */}
          <div className="lg:col-span-1 mt-10 lg:mt-0 space-y-32">
            {experiences.map((exp, index) => (
              <div key={index}>
                {/* A placeholder div to ensure vertical alignment */}
                <div className="h-0 w-0"></div> 
                
                {/* Image Card */}
                <div className="overflow-hidden rounded-xl shadow-2xl bg-white transition-opacity duration-500"
                     style={{ opacity: activeIndex === index ? 1 : 0.2 }}
                >
                  <img 
                    src={exp.image} 
                    alt={`Visual for ${exp.title}`} 
                    className="w-full object-cover aspect-video transition-transform duration-500 hover:scale-[1.03]" 
                  />
                </div>
              </div>
            ))}
          </div>
          
        </div>
        
      </section>
    </div>
  );
};

export default ExperienceTimeline;