import React, { useState } from "react";

// --- Mock Data ---
const expTabs = ["Languages", "Framework & Libraries", "Tools & Platforms"];

const expData = {
  Languages: [
    {
      title: "HTML, CSS, JS",
      level: "Intermediate",
      icons: ["🌐", "🎨", "⚡"],
      type: "stack" // Custom type for badge stack rendering
    },
    {
      title: "Java",
      level: "Basic",
      icons: ["☕"],
      type: "single"
    },
    {
      title: "Python",
      level: "Intermediate",
      icons: ["🐍"],
      type: "single"
    },
    {
      title: "C/C++",
      level: "Basic",
      icons: ["⚙️"],
      type: "single"
    },
  ],
  "Framework & Libraries": [
    {
      title: "React Native",
      level: "Intermediate",
      icons: ["⚛️"],
      type: "single"
    },
    {
      title: "TensorFlow",
      level: "Advanced",
      icons: ["💨"],
      type: "single"
    },
    {
      title: "Node.js",
      level: "Intermediate",
      icons: ["🟢"],
      type: "single"
    },
  ],
  "Tools & Platforms": [
    {
      title: "Git & GitHub",
      level: "Intermediate",
      icons: ["📦"],
      type: "single"
    },
    {
      title: "VS Code",
      level: "Advanced",
      icons: ["💻"],
      type: "single"
    },
    {
      title: "Firebase",
      level: "Basic",
      icons: ["🔥"],
      type: "single"
    },
  ],
};

// Component to render the HTML/CSS/JS badge stack
const HtmlCssJsIconStack = () => (
    <div className="flex relative w-16 h-16 mb-4">
        {/* HTML (Bottom, slightly darker) */}
        <div className="absolute top-0 left-0 w-12 h-12 bg-orange-600 rounded-lg shadow-lg flex items-center justify-center text-xl font-bold text-white z-10">
            <span className="text-2xl">5</span>
        </div>
        {/* CSS (Middle) */}
        <div className="absolute top-1 right-0 w-12 h-12 bg-blue-600 rounded-lg shadow-lg flex items-center justify-center text-xl font-bold text-white z-20 translate-x-3 translate-y-3">
            <span className="text-2xl">3</span>
        </div>
        {/* JS (Top) - A simple emoji for JS is fine here, centered on a background. */}
        <div className="absolute bottom-0 right-0 w-12 h-12 bg-yellow-400 rounded-lg shadow-lg flex items-center justify-center text-xl font-bold text-gray-900 z-30 translate-x-5 translate-y-5">
            ⚡
        </div>
    </div>
);

// Component to handle different icon types
const IconRenderer = ({ item }) => {
    if (item.title === "HTML, CSS, JS") {
        return <HtmlCssJsIconStack />;
    }

    // Default for single/other icons (Java, Python, etc.)
    return (
        <div className="text-6xl mb-4 p-2">
            {/* The single icon, styled to look prominent */}
            <span className="drop-shadow-lg">{item.icons[0]}</span>
        </div>
    );
};

function Experience() {
  const [activeTab, setActiveTab] = useState(expTabs[0]);

  return (
    // Outer container for the light background color
    <div className=" min-h-screen font-sans">
      <section id="experience" className="mx-auto max-w-6xl px-1 py-16 md:py-24">
        
        {/* SECTION HEADER */}
        <h2 className="font-serif text-5xl md:text-6xl mb-12 text-indigo-900 italic font-medium tracking-tight text-left">
          Experience
        </h2>
        
        {/* FLEX LAYOUT - Side by side. Removed gap-6 here. */}
        <div className="flex flex-col md:flex-row">
          
          {/* LEFT COLUMN: Sidebar Tabs - Now wrapped in a border container */}
          {/* This container defines the height and the outer rounded border */}
          <div className="md:w-1/3 p-0 md:pr-6 mb-6 md:mb-0">
             <div className="h-full w-full rounded-[30px]  flex flex-col justify-around p-2">
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

          {/* RIGHT COLUMN: Content Container */}
          {/* This container defines the full height of the row */}
          <div className="md:w-2/3 min-h-[300px] bg-[#1A2B53] rounded-[30px] p-8 shadow-2xl">
            
            {/* HORIZONTAL SCROLLING WRAPPER */}
            <div className="overflow-x-auto">
              
              {/* FLEX CONTAINER for Cards */}
              <div className="flex gap-6 min-w-max pb-2">
                
                {expData[activeTab].map((item, i) => (
                  <div
                    key={i}
                    // Increased size and roundness to match the image better
                    className="w-[240px] h-[260px] flex-shrink-0 rounded-[2rem] bg-white p-6 
                               flex flex-col items-center justify-center text-center transition 
                               shadow-xl hover:shadow-2xl cursor-pointer"
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

// To adhere to the single file structure, we use App as the default export.
export default function App() {
    return <Experience />;
}
