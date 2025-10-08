import React from "react";
import clip from "../assets/clip.png";

function Profile() {
  return (
    <section
      id="profile"
      className="mx-auto max-w-6xl px-6 py-20 min-h-screen flex items-center"
    >
      <div className="flex flex-col md:flex-row items-center justify-between gap-16 w-full">
        {/* Left: Text */}
        <div className="md:w-1/2 space-y-6 text-center md:text-left">
          <h1 className="font-serif italic text-6xl text-indigo-900">Hello!</h1>
          <p className="text-lg leading-relaxed  text-indigo-900">
            I’m Valen, a{" "}
            <span className="font-semibold text-indigo-900">
              passionate Computer Science student
            </span>{" "}
            with strong interests in{" "}
            <span className="font-semibold">machine learning</span>,{" "}
            <span className="font-semibold">UI/UX design</span>, web development,
            and <span className="font-semibold">IoT development</span>.
          </p>
          <p className="text-lg leading-relaxed text-indigo-900">
            Curious to explore new technologies, quick to adapt, and
            collaborative in delivering practical and impactful solutions.
          </p>
        </div>

        {/* Right: Portrait + Note */}
          <div className="md:w-1/2 relative flex justify-start items-center ml-8">
      {/* Photo wrapper for tilt + shadow */}
      <div className="relative">
        <img
          src="src/assets/FOTOValen.png"
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
                src={clip}
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

          {/* Note Card
              <div className="absolute -top-6 right-[-3.5rem] bg-white p-6 w-[200px] ml-8 rounded-lg shadow-xl rotate-[-3deg] hover:rotate-[-5deg] transition-all duration-300 z-20">
          <img
            src={clip}
            alt="Clip"
            className="absolute -top-8 **left-1** w-16 h-16 rotate-[8deg] opacity-95 z-30"
          />
          <p className="text-sm leading-relaxed text-indigo-900 font-medium text-justify">
            A third-year Computer Science student at Binus University.
            Currently taking streaming – Intelligence Systems.
            <br />
            <br />
            Expected to graduate in 2027.
          </p>
        </div>
      </div> */}

          {/* Soft background glow behind image */}
          <div className="absolute w-[360px] h-[420px] bg-indigo-100/30 rounded-full blur-3xl -z-10"></div>
        </div>
      </div>
    </section>
  );
}

export default Profile;
