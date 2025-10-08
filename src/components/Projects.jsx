import React from "react";

// Example project data (replace with your real ones)
const projects = [
  {
    id: 1,
    title: "Portfolio Website",
    desc: "A personal portfolio built with React and Tailwind CSS to showcase projects and skills.",
    tags: ["React", "Tailwind", "Vite"],
  },
  {
    id: 2,
    title: "Smart Home IoT System",
    desc: "IoT-based system using ESP32 and Firebase for controlling home devices remotely.",
    tags: ["IoT", "ESP32", "Firebase"],
  },
  {
    id: 3,
    title: "Machine Learning Model",
    desc: "Developed a classification model with Python and scikit-learn for predictive analytics.",
    tags: ["Python", "scikit-learn", "ML"],
  },
  {
    id: 4,
    title: "UI/UX Case Study",
    desc: "Redesigned a mobile app interface with Figma, improving usability and aesthetics.",
    tags: ["Figma", "UI/UX", "Design"],
  },
  {
    id: 5,
    title: "UI/UX Case Study",
    desc: "Redesigned a mobile app interface with Figma, improving usability and aesthetics.",
    tags: ["Figma", "UI/UX", "Design"],
  },
  {
    id: 6,
    title: "UI/UX Case Study",
    desc: "Redesigned a mobile app interface with Figma, improving usability and aesthetics.",
    tags: ["Figma", "UI/UX", "Design"],
  },
];

function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-4 py-8 md:py-16">
      <h2 className="font-serif text-3xl md:text-4xl mb-6">Projects</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          <article
            key={p.id}
            className="rounded-2xl border bg-card text-card-foreground p-4 hover:shadow-lg hover:-translate-y-0.5 transition"
          >
            {/* Thumbnail placeholder (replace with image if needed) */}
            <div className="h-52 rounded-xl bg-muted mb-4" />

            {/* Project title + desc */}
            <h3 className="font-semibold text-lg">{p.title}</h3>
            <p className="text-sm leading-relaxed mt-1">{p.desc}</p>

            {/* Tags */}
            <div className="mt-3 flex flex-wrap gap-2">
              {p.tags.map((t) => (
                <span
                  key={t}
                  className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs"
                >
                  {t}
                </span>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-4">
              <a
                href="#"
                className="inline-flex items-center rounded-md bg-primary text-primary-foreground px-3 py-1.5 text-sm hover:opacity-90 transition"
              >
                View Details
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Projects;
