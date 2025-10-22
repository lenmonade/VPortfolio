import React, { useState } from "react";

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
    let imgSize = "w-20 h-20";
    if (item.title === "HTML, CSS, JS" || item.title === "Microsoft Office") {
      // Apply a larger, custom size for HTML, CSS, JS
      imgSize = "w-28 h-28";
    }

    // Check if the icon is an image path (contains a slash)
    if (iconSrc && iconSrc.includes('/')) {
        return (
            // Set container height to accommodate the largest possible icon (h-28)
            <div className="flex justify-center items-center mb-4 h-28 w-full"> 
                <img 
                    src={iconSrc} 
                    alt={`${item.title} icon`}
                    // ADDED: group-hover effects here for scaling and lifting the icon
                    className={`${imgSize} object-contain drop-shadow-lg transition duration-300 group-hover:scale-110 group-hover:-translate-y-2`} 
                />
            </div>
        );
    }

    // Fallback for simple emojis (if paths are wrong or if you intentionally use emojis)
    return (
        <div className="text-6xl mb-4 p-2">
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
  React.useEffect(() => {
    setKey(prevKey => prevKey + 1);
  }, [activeTab]);

  // 2. Measure and set sidebar height after render/tab change
  React.useEffect(() => {
    if (contentRef.current) {
      // Set the height of the sidebar wrapper equal to the content wrapper height
      setSidebarHeight(contentRef.current.offsetHeight);
    }
  }, [key]); // Re-measure every time the content key changes (i.e., every tab change)


  return (
    // Outer container for the light background color
    <div className=" min-h-screen font-sans">
        
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

      <section id="skills" className="mx-auto max-w-6xl px-1 py-16 md:py-24">
        
        {/* SECTION HEADER */}
        <h2 className="font-serif text-5xl md:text-6xl mb-12 text-indigo-900 italic font-medium tracking-tight text-left">
          Skills
        </h2>
        
        {/* FLEX LAYOUT - Side by side. Removed gap-6 here. */}
        <div className="flex flex-col md:flex-row">
          
          {/* LEFT COLUMN: Sidebar Tabs (Height set dynamically) */}
          <div className="md:w-1/3 p-0 md:pr-6 mb-6 md:mb-0">
             {/* Dynamic height applied here */}
             <div 
               className="h-full w-full rounded-[30px]  flex flex-col justify-around p-2" 
               style={{ height: sidebarHeight !== 'auto' && sidebarHeight > 0 ? `${sidebarHeight}px` : 'auto' }}
             >
                {expTabs.map((t) => {
                  const active = t === activeTab;
                  return (
                    <button
                      key={t}
                      onClick={() => setActiveTab(t)}
                      className={`
                        w-full transition text-center font-semibold
                        py-6 px-8 text-lg rounded-[22px]
                        ${
                          active
                            // Active tab is solid navy with white text
                            ? "bg-[#17266A] text-white shadow-lg"
                            // Inactive tab is white with navy border and text
                            : "bg-white text-[#17266A] border-2 border-[#081956] hover:bg-gray-50"
                        }
                      `}
                    >
                      {t}
                    </button>
                  );
                })}
             </div>
          </div>

          {/* RIGHT COLUMN: Content Container (Reference used for measurement) */}
          <div 
            ref={contentRef} // Reference attached here
            className="md:w-2/3 min-h-[300px] bg-[#1A2B53] rounded-[30px] p-8 shadow-2xl"
          >
            
            {/* HORIZONTAL SCROLLING WRAPPER */}
            <div className="overflow-x-auto">
              
              {/* FLEX CONTAINER for Cards */}
              <div className="flex gap-6 min-w-max pb-2">
                
                {expData[activeTab].map((item, i) => (
                  <div
                    key={i}
                    // EDITED: Re-added 'group' class. Removed hover:-translate-y-1 and hover:scale-[1.03]
                    className="group w-[240px] h-[260px] flex-shrink-0 rounded-[2rem] bg-white p-6 
                               flex flex-col items-center justify-center text-center transition-all duration-300 ease-in-out
                               shadow-xl hover:shadow-2xl animate-fade-in"
                    // Stagger the animation using an inline style delay
                    style={{ animationDelay: `${i * 0.07}s` }} 
                  >
                    
                    {/* Icons/Badges */}
                    <IconRenderer item={item} />
                    
                    {/* Title */}
                    <h3 className="text-2xl font-bold text-[#17266A] mb-1 tracking-tight">
                      {item.title}
                    </h3>
                    
                    {/* Level - Use a muted color for contrast */}
                    <p className="text-base font-medium text-gray-500">
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
