import React, { useState, useEffect } from "react";
import "animate.css";
import {
  motion,
  useTransform,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";

const Navbar = () => {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  const [view, setView] = useState(false);

  return (
    <>
      <div
        className={`  ${
          hidden
            ? "animate__animated animate__fadeOutLeft"
            : "animate__animated animate__fadeInLeft"
        }    fixed top-4 left-4 z-50  `}
        onClick={() => (!view ? setView(true) : setView(false))}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className={`w-12 h-12 text-yellow-400   hover:border-4 p-1 ${
            view
              ? "animate__animated animate__fadeOutLeft"
              : "animate__animated animate__fadeInLeft"
          }`}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className={`w-12 h-12 text-yellow-400  hover:border-4 p-1 ${
            !view
              ? "animate__animated animate__fadeOutLeft"
              : "animate__animated animate__fadeInLeft"
          }`}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18 18 6M6 6l12 12"
          />
        </svg>
      </div>

      <div className="lg:w-1/3 w-screen h-1/6  fixed top-0 z-30 ">
        <nav
          className={` h-screen ${
            hidden || !view
              ? "animate__animated animate__fadeOutLeft"
              : "animate__animated animate__fadeInLeft"
          }   text-slate-50  p-4  font-extrabold m-auto  text-2xl  bg-slate-900  justify-center items-center `}
        >
          <button className="group relative px-4   transition-colors duration-[400ms] hover:text-yellow-400  mt-24 mb-4 w-1/2 mx-auto   ">
            <span> Home</span>

            <span className="absolute left-0 top-0 h-[2px] w-0 bg-yellow-400 transition-all duration-100 group-hover:w-full" />

            <span className="absolute right-0 top-0 h-0 w-[2px] bg-yellow-400 transition-all delay-100 duration-100 group-hover:h-full" />

            <span className="absolute bottom-0 right-0 h-[2px] w-0 bg-yellow-400 transition-all delay-200 duration-100 group-hover:w-full" />

            <span className="absolute bottom-0 left-0 h-0 w-[2px] bg-yellow-400 transition-all delay-300 duration-100 group-hover:h-full" />
          </button>{" "}
          <button className="group relative px-4   transition-colors duration-[400ms] hover:text-yellow-400 my-4 w-1/2 mx-auto">
            <span>Experiences</span>

            <span className="absolute left-0 top-0 h-[2px] w-0 bg-yellow-400 transition-all duration-100 group-hover:w-full" />

            <span className="absolute right-0 top-0 h-0 w-[2px] bg-yellow-400 transition-all delay-100 duration-100 group-hover:h-full" />

            <span className="absolute bottom-0 right-0 h-[2px] w-0 bg-yellow-400 transition-all delay-200 duration-100 group-hover:w-full" />

            <span className="absolute bottom-0 left-0 h-0 w-[2px] bg-yellow-400 transition-all delay-300 duration-100 group-hover:h-full" />
          </button>{" "}
          <button className="group relative px-4   transition-colors duration-[400ms] hover:text-yellow-400 my-4 w-1/2 mx-auto">
            <span> Gallery</span>

            <span className="absolute left-0 top-0 h-[2px] w-0 bg-yellow-400 transition-all duration-100 group-hover:w-full" />

            <span className="absolute right-0 top-0 h-0 w-[2px] bg-yellow-400 transition-all delay-100 duration-100 group-hover:h-full" />

            <span className="absolute bottom-0 right-0 h-[2px] w-0 bg-yellow-400 transition-all delay-200 duration-100 group-hover:w-full" />

            <span className="absolute bottom-0 left-0 h-0 w-[2px] bg-yellow-400 transition-all delay-300 duration-100 group-hover:h-full" />
          </button>{" "}
          <button className="group relative px-4   transition-colors duration-[400ms] hover:text-yellow-400 my-4 w-1/2 mx-auto">
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
