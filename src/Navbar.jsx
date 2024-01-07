import React, { useState, useEffect } from "react";

const Navbar = () => {
  return (
    <>
      <div className="w-screen flex justify-center">
        <nav className="fixed top-0 flex justify-evenly  text-slate-50 w-1/2 p-4 z-50 font-extrabold mx-auto rounded-xl mt-2">
          <button className="group relative px-4   transition-colors duration-[400ms] hover:text-yellow-400">
            <span> Home</span>

            <span className="absolute left-0 top-0 h-[2px] w-0 bg-yellow-400 transition-all duration-100 group-hover:w-full" />

            <span className="absolute right-0 top-0 h-0 w-[2px] bg-yellow-400 transition-all delay-100 duration-100 group-hover:h-full" />

            <span className="absolute bottom-0 right-0 h-[2px] w-0 bg-yellow-400 transition-all delay-200 duration-100 group-hover:w-full" />

            <span className="absolute bottom-0 left-0 h-0 w-[2px] bg-yellow-400 transition-all delay-300 duration-100 group-hover:h-full" />
          </button>
          <button className="group relative px-4   transition-colors duration-[400ms] hover:text-yellow-400">
            <span>Experiences</span>

            <span className="absolute left-0 top-0 h-[2px] w-0 bg-yellow-400 transition-all duration-100 group-hover:w-full" />

            <span className="absolute right-0 top-0 h-0 w-[2px] bg-yellow-400 transition-all delay-100 duration-100 group-hover:h-full" />

            <span className="absolute bottom-0 right-0 h-[2px] w-0 bg-yellow-400 transition-all delay-200 duration-100 group-hover:w-full" />

            <span className="absolute bottom-0 left-0 h-0 w-[2px] bg-yellow-400 transition-all delay-300 duration-100 group-hover:h-full" />
          </button>
          <button className="group relative px-4   transition-colors duration-[400ms] hover:text-yellow-400">
            <span> Gallery</span>

            <span className="absolute left-0 top-0 h-[2px] w-0 bg-yellow-400 transition-all duration-100 group-hover:w-full" />

            <span className="absolute right-0 top-0 h-0 w-[2px] bg-yellow-400 transition-all delay-100 duration-100 group-hover:h-full" />

            <span className="absolute bottom-0 right-0 h-[2px] w-0 bg-yellow-400 transition-all delay-200 duration-100 group-hover:w-full" />

            <span className="absolute bottom-0 left-0 h-0 w-[2px] bg-yellow-400 transition-all delay-300 duration-100 group-hover:h-full" />
          </button>
          <button className="group relative px-4   transition-colors duration-[400ms] hover:text-yellow-400">
            <span> Contact</span>

            <span className="absolute left-0 top-0 h-[2px] w-0 bg-yellow-400 transition-all duration-100 group-hover:w-full" />

            <span className="absolute right-0 top-0 h-0 w-[2px] bg-yellow-400 transition-all delay-100 duration-100 group-hover:h-full" />

            <span className="absolute bottom-0 right-0 h-[2px] w-0 bg-yellow-400 transition-all delay-200 duration-100 group-hover:w-full" />

            <span className="absolute bottom-0 left-0 h-0 w-[2px] bg-yellow-400 transition-all delay-300 duration-100 group-hover:h-full" />
          </button>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
