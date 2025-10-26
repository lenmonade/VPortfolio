import React, { useState, useEffect } from "react";

// --- Mock Data ---
const expTabs = ["Languages", "Framework & Libraries", "Tools & Platforms"];

const expData = {
  Languages: [
    {
      title: "HTML, CSS, JS",
      level: "Advanced",
      icons: ["/HTMLCSS.png"],
      type: "single" 
    },
    {
      title: "Java",
      level: "Basic",
      icons: ['/JAVA.png'],
      type: "single"
    },
    {
      title: "Python",
      level: "Intermediate",
      icons: ["/PY.png"],
      type: "single"
    },
    {
      title: "C/C++",
      level: "Intermediate",
      icons: ["/C.png"],
      type: "single"
    },
  ],
  "Framework & Libraries": [
    {
      title: "React Native",
      level: "Intermediate",
      icons: ["/REACT.png"],
      type: "single"
    },
    {
      title: "TensorFlow",
      level: "Advanced",
      icons: ["/TENSOR.png"],
      type: "single"
    },
    {
      title: "PyTorch",
      level: "Intermediate",
      icons: ["/PYTORCH.png"],
      type: "single"
    },
    {
      title: "Tailwind CSS",
      level: "Intermediate",
      icons: ["/TAILWIND.png"],
      type: "single"
    },
  ],
  "Tools & Platforms": [
    {
      title: "Git & GitHub",
      level: "Intermediate",
      icons: ["/GIT.png"],
      type: "single"
    },
    {
      title: "Figma",
      level: "Advanced",
      icons: ["/FIGMA.png"],
      type: "single"
    },
    {
      title: "Visual Studio Code",
      level: "Advanced",
      icons: ["/VSC.png"],
      type: "single"
    },
    {
      title: "Microsoft Office",
      level: "Advanced",
      icons: ["/MICROSOFT.png"],
      type: "single"
    },
    {
      title: "MySQL",
      level: "Intermediate",
      icons: ["/MYSQL.png"],
      type: "single"
    },
  ],
};

// Component to handle different icon types
const IconRenderer = ({ item }) => {
    const iconSrc = item.icons[0];
    
    // Determine image size based on item title
    // Mengurangi ukuran icon sedikit di mobile agar muat lebih baik
    let imgSize = "w-14 h-14 sm:w-18 sm:h-18"; 
    if (item.title === "HTML, CSS, JS" || item.title === "Microsoft Office") {
      imgSize = "w-20 h-20 sm:w-24 sm:h-24";
    }

    if (iconSrc && iconSrc.includes('/')) {
        return (
            // Mengurangi tinggi container icon sedikit di mobile
            <div className="flex justify-center items-center mb-1 h-20 w-full sm:h-24"> 
                <img 
                    src={iconSrc} 
                    alt={`${item.title} icon`}
                    className={`${imgSize} object-contain drop-shadow-lg transition duration-300 group-hover:scale-110 group-hover:-translate-y-2`} 
                />
            </div>
        );
    }

    // Fallback for simple emojis
    return (
        <div className="text-4xl mb-1 p-1 sm:text-5xl">
            <span className="drop-shadow-lg">{iconSrc}</span>
        </div>
    );
};

function Skills() {
  const [activeTab, setActiveTab] = useState(expTabs[0]);
  const [key, setKey] = useState(0); 
  
  // State and Ref for dynamic sizing
  const [sidebarHeight, setSidebarHeight] = useState('auto');
  const contentRef = React.useRef(null);

  // 1. Update key on tab change to trigger fade-in animation
  useEffect(() => {
    setKey(prevKey => prevKey + 1);
  }, [activeTab]);

  // 2. Measure and set sidebar height after render/tab change
  useEffect(() => {
    const isDesktop = window.matchMedia("(min-width: 768px)").matches; 

    // FIX: Only apply dynamic height on desktop, set to auto otherwise.
    if (contentRef.current && isDesktop) {
      setSidebarHeight(contentRef.current.offsetHeight);
    } else {
      setSidebarHeight('auto');
    }
  }, [key]); 


  return (
    // Outer container for the light background color
    <div className="min-h-screen font-sans">
        
      {/* CSS for custom animation */}
      <style>{`
        /* Define the keyframes for a simple fade-in and slight lift */
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        /* Apply keyframes to a utility class */
        .animate-fade-in {
          animation: fadeIn 0.5s ease-out forwards;
        }
      `}</style>

      {/* Padding vertikal pada section dikurangi untuk mobile (py-12) */}
      <section id="skills" className="mx-auto max-w-6xl px-4 py-12 md:py-24">
        
        {/* SECTION HEADER */}
        <h2 className="font-serif text-4xl md:text-6xl mb-8 md:mb-12 text-indigo-900 italic font-medium tracking-tight text-left">
          Skills
        </h2>
        
        {/* FLEX LAYOUT */}
        <div className="flex flex-col md:flex-row">
          
          {/* LEFT COLUMN: Sidebar Tabs (Perbaikan Hover State) */}
          <div className="w-full md:w-1/3 p-0 md:pr-6 mb-6 md:mb-0">
             <div 
               className="w-full rounded-[30px] flex flex-col space-y-3 md:space-y-0 md:justify-around p-1 md:p-2" 
               // FIX: Conditionally apply height style
               style={sidebarHeight !== 'auto' && sidebarHeight > 0 ? { height: `${sidebarHeight}px` } : {}}
             >
                {expTabs.map((t) => {
                  const active = t === activeTab;
                  return (
                    <button
                      key={t}
                      onClick={() => setActiveTab(t)}
                      className={`
                        w-full transition text-center font-semibold
                        py-3 md:py-6 px-4 text-sm md:text-lg rounded-[22px]
                        focus:outline-none 
                        ${
                          active
                            ? // Tombol AKTIF: Kunci warna background dan text, hapus border, pastikan hover juga biru gelap
                              "bg-[#17266A] text-white shadow-lg hover:bg-[#17266A] border-transparent border-2" 
                            : // Tombol NON-AKTIF: Terapkan border dan hover abu-abu
                              "bg-white text-[#17266A] border-2 border-[#081956] hover:bg-gray-50"
                        }
                      `}
                    >
                      {t}
                    </button>
                  );
                })}
             </div>
          </div>

          {/* RIGHT COLUMN: Content Container */}
          <div 
            ref={contentRef}
            className="w-full md:w-2/3 min-h-[300px] bg-[#1A2B53] rounded-[30px] p-3 sm:p-6 md:p-8 shadow-2xl"
          >
            
            {/* HORIZONTAL SCROLLING WRAPPER */}
            <div className="overflow-x-auto">
              
              {/* FLEX CONTAINER for Cards */}
              <div className="flex gap-3 sm:gap-6 min-w-max pb-2">
                
                {expData[activeTab].map((item, i) => (
                  <div
                    key={i}
                    // PERBAIKAN: Mengurangi tinggi kartu di mobile dari h-[220px] menjadi h-[200px] 
                    // dan di sm:h-[260px] menjadi sm:h-[240px] agar lebih muat di layar vertikal.
                    className="group w-[160px] sm:w-[240px] h-[200px] sm:h-[240px] flex-shrink-0 rounded-[2rem] bg-white p-3 sm:p-6 
                               flex flex-col items-center justify-center text-center transition-all duration-300 ease-in-out
                               shadow-xl hover:shadow-2xl animate-fade-in"
                    style={{ animationDelay: `${i * 0.07}s` }} 
                  >
                    
                    {/* Icons/Badges */}
                    <IconRenderer item={item} />
                    
                    {/* Title */}
                    <h3 className="text-lg sm:text-2xl font-bold text-[#17266A] mb-1 tracking-tight">
                      {item.title}
                    </h3>
                    
                    {/* Level */}
                    <p className="text-xs sm:text-base font-medium text-gray-500">
                      {item.level}
                    </p>
                    
                  </div>
                ))}
                
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}

export default Skills;
