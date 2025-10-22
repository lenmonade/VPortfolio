import React from "react";

function Profile() {
  return (
    <section
      id="profile"
      className="mx-auto max-w-6xl px-6 py-20 min-h-screen flex items-center"
    >
      <div className="flex flex-col md:flex-row items-center justify-between gap-16 w-full">
        {/* Left: Text */}
        <div className="md:w-1/2 space-y-6 text-center md:text-justify">
          <h1 className="font-serif italic text-6xl text-indigo-900">Hello! I'm Valen,</h1>
          <p className="text-lg leading-relaxed  text-indigo-900">
            a Computer Science student with strong interests in{" "}
            <span className="font-semibold text-indigo-900">
              machine learning, data visualization, UI/UX, and frontend development. 
            </span>{" "}
            <span className="font-semibold">I strive to build useful and user-centered solutions as part of my learning journey.</span>{" "}
          </p>
          <p className="text-lg leading-relaxed text-indigo-900">
            I continuously explore different areas across machine learning and frontend development — from training 
            models with frameworks like TensorFlow and PyTorch to creating responsive interfaces 
            with React, Node.js, and TailwindCSS, and more. Here, I’ll showcase some of my works, experiences, 
            and explorations throughout my journey.
          </p>
        </div>

        {/* Right: Portrait + Note */}
          <div className="md:w-1/2 relative flex justify-start items-center ml-8">
      {/* Photo wrapper for tilt + shadow */}
      <div className="relative">
        <img
          src="/FOTOValen.png"
          alt="Valen"
          className="w-[300px] md:w-[340px] rounded-xl shadow-2xl object-cover transform rotate-[2deg] transition-transform duration-500 hover:rotate-6"
        />

         {/* Note Card */}
            {/* --- Adjusted top for more down placement --- */}
            <div
              className="absolute bg-white p-5 w-[200px] h-[275px] rounded-lg shadow-xl -rotate-6 z-20 transition-transform duration-500 hover:-rotate-12"
              style={{ top: 20, right: -120 }}
            >
              <img
                src="/clip.png"
                alt="Clip"
                className="absolute -top-12 left-1 w-20 h-20 rotate-[-6deg] opacity-95 z-30"
              />
              <div className="space-y-2">
                {/* <h4 className="text-base font-semibold text-indigo-800 mb-1">About Me</h4> */}
                <p className="text-sm leading-relaxed text-indigo-900 font-medium italic text-justify">
                  <br />
                  A third-year Computer Science student at <span className="font-semibold">Binus University</span>.<br/>
                  Currently taking streaming – <span className="font-semibold">Intelligence Systems</span>.
                  <br />
                  <br />
                </p>
                <p className="text-xs text-slate-600 mt-2 text-justify">Expected to graduate in <span className="font-semibold">2027</span>.</p>
              </div>
            </div>
          </div>

          {/* Soft background glow behind image */}
          <div className="absolute w-[360px] h-[420px] bg-indigo-100/30 rounded-full blur-3xl -z-10"></div>
        </div>
      </div>
    </section>
  );
}

export default Profile;
