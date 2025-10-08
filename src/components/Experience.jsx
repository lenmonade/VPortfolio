import React, { useState } from "react";

// Example tabs
const expTabs = ["Work", "Projects", "Internships"];

// Example data per tab
const expData = {
  Work: [
    { title: "Frontend Developer", level: "PT Example - 2023" },
    { title: "UI/UX Designer", level: "Freelance - 2022" },
  ],
  Projects: [
    { title: "Portfolio Website", level: "React + Tailwind" },
    { title: "IoT Smart Home", level: "ESP32 + Firebase" },
  ],
  Internships: [
    { title: "Software Engineer Intern", level: "Startup Inc - 2024" },
  ],
};

function Experience() {
  const [activeTab, setActiveTab] = useState(expTabs[0]);

  return (
    <section id="experience" className="mx-auto max-w-6xl px-4 py-8 md:py-16">
      <h2 className="font-serif text-3xl md:text-4xl mb-6">Experience</h2>
      <div className="grid md:grid-cols-[380px,1fr] gap-6">
        
        {/* Sidebar tabs */}
        <div className="flex md:flex-col gap-3">
          {expTabs.map((t) => {
            const active = t === activeTab;
            return (
              <button
                key={t}
                onClick={() => setActiveTab(t)}
                className={`h-20 w-full rounded-xl border transition text-left px-5 py-3 font-medium
                  ${
                    active
                      ? "bg-blue-600 text-white border-transparent"
                      : "bg-card text-foreground"
                  }
                `}
              >
                {t}
              </button>
            );
          })}
        </div>

        {/* Content */}
        <div className="rounded-2xl border bg-card text-card-foreground p-4 md:p-6">
          <div className="overflow-x-auto">
            <div className="flex gap-4 min-w-max">
              {expData[activeTab].map((item, i) => (
                <div
                  key={i}
                  className="w-[250px] h-[250px] rounded-xl border bg-background p-4 flex flex-col justify-between shadow-sm"
                >
                  <div className="h-28 rounded-lg bg-muted" aria-hidden />
                  <div>
                    <h3 className="font-semibold">{item.title}</h3>
                    <p className="text-sm opacity-80">{item.level}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Experience;
