import React, { useState, useEffect } from "react";
import "./App.css";
import { motion, useTransform, useScroll } from "framer-motion";
import Datepicker from "react-tailwindcss-datepicker";
import "animate.css";

const Landing = () => {
  const [value, setValue] = useState({
    startDate: null,
    endDate: null,
  });

  const handleValueChange = (newValue) => {
    console.log("newValue:", newValue);
    setValue(newValue);
  };

  const { scrollY } = useScroll();

  const scale = useTransform(scrollY, [500, 0], [0, 1]);

  const [current, setCurrent] = useState(4);

  const [drawing, setDrawing] = useState(true);
  useEffect(() => {
    const intervalId = setInterval(() => {
      setDrawing((prevDrawing) => !prevDrawing);
    }, 6000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <motion.div
        className="flex-col  relative    text-slate-200 "
        initial="initial"
        whileInView="animate"
        style={{
          scale: scale,
        }}
      >
        {current == 1 && (
          <img
            src="https://qresorts.in/uploads/59991b4105041_1.jpg"
            className="w-full h-96 object-cover animate__animated animate__backInRight "
          />
        )}

        {current == 2 && (
          <img
            src="https://qresorts.in/uploads/59991b6ebf9ef_01-01.jpg"
            className="w-full h-96 object-cover animate__animated animate__backInRight  object-top"
          />
        )}
        {current == 3 && (
          <img
            src="https://qresorts.in/uploads/59e873fbb24d4_2.jpg"
            className="w-full h-96 object-cover animate__animated animate__backInRight "
          />
        )}
        {current == 4 && (
          <img
            src="https://qresorts.in/uploads/59991bf62b345_9R0A2015.jpg"
            className="w-full h-96 object-cover animate__animated animate__backInRight "
          />
        )}
        {current == 5 && (
          <img
            src="https://www.keralatourism.org/uploads/destination-wedding/images/large/9r0a2065-20230330053527466181.jpg"
            className="w-full h-96 object-cover animate__animated animate__backInRight "
          />
        )}
        {current == 6 && (
          <img
            src=" https://www.keralatourism.org/uploads/destination-wedding/images/large/22-20230330053557644543.jpg"
            className="w-full h-96 object-cover animate__animated animate__backInRight "
          />
        )}
        <div className=" px-12 py-4  z-50    bg-slate-900  lg:flex  ">
          <p className="text-9xl text-yellow-300 font-Italiana mb-4 animate__animated animate__fadeInDown">
            Q
          </p>
          <div className="flex-col my-auto">
            <p className="font-Italiana  ">
              <p className="my-auto opacity-75 text-4xl flex">
                <p className="animate__animated animate__fadeInDown mr-2">
                  uilon
                </p>{" "}
                <p className="animate__animated animate__fadeInDown animate__delay-1s mr-2">
                  Beach
                </p>{" "}
                <p className="animate__animated animate__fadeInDown animate__delay-2s">
                  Hotel
                </p>
              </p>
            </p>
            <div className="lg:flex    w-full my-auto">
              {/* <img src="./logo.png" className=" w-12 h-12" /> */}
              <div className="  font-bold  ">
                <div className="text-4xl">
                  <p className="flex">
                    <motion.svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-12 h-12 text-yellow-400"
                    >
                      <motion.path
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: drawing ? 1 : 0 }}
                        transition={{
                          duration: 2,
                          ease: "easeInOut",
                          repeat: 0,
                        }}
                        strokeDasharray="0 1"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                      />
                    </motion.svg>
                    <motion.svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-12 h-12 text-yellow-400"
                    >
                      <motion.path
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: drawing ? 1 : 0 }}
                        transition={{
                          duration: 2,
                          ease: "easeInOut",
                          repeat: 0,
                          delay: 0.5,
                        }}
                        strokeDasharray="0 1"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                      />
                    </motion.svg>
                    <motion.svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-12 h-12 text-yellow-400"
                    >
                      <motion.path
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: drawing ? 1 : 0 }}
                        transition={{
                          duration: 2,
                          ease: "easeInOut",
                          repeat: 0,
                          delay: 1,
                        }}
                        strokeDasharray="0 1"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                      />
                    </motion.svg>
                    <motion.svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-12 h-12 text-yellow-400"
                    >
                      <motion.path
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: drawing ? 1 : 0 }}
                        transition={{
                          duration: 2,
                          ease: "easeInOut",
                          repeat: 0,
                          delay: 1.5,
                        }}
                        strokeDasharray="0 1"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                      />
                    </motion.svg>
                    <motion.svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-12 h-12 text-yellow-400"
                    >
                      <motion.path
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: drawing ? 1 : 0 }}
                        transition={{
                          duration: 2,
                          ease: "easeInOut",
                          repeat: 0,
                          delay: 2,
                        }}
                        strokeDasharray="0 1"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                      />
                    </motion.svg>
                  </p>{" "}
                </div>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 m-auto flex-col ">
            <p className="opacity-25 animate__animated animate__fadeInDown ">
              Check availablity
            </p>
            <div className="flex animate__animated animate__fadeInDown ">
              <Datepicker
                primaryColor={"yellow"}
                value={value}
                onChange={handleValueChange}
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-12 h-12 my-auto ml-4   "
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
            </div>
            <div className="flex p-2">
              <button className="group relative px-4 py-2 font-medium text-slate-100 transition-colors duration-[400ms] hover:text-yellow-400">
                <span>
                  {" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="30"
                    height="30"
                    viewBox="0 0 50 50"
                    fill="#FFFFFF"
                    className=" animate__animated animate__fadeIn animate__delay-1s"
                  >
                    <path d="M 25 3 C 12.861562 3 3 12.861562 3 25 C 3 36.019135 11.127533 45.138355 21.712891 46.728516 L 22.861328 46.902344 L 22.861328 29.566406 L 17.664062 29.566406 L 17.664062 26.046875 L 22.861328 26.046875 L 22.861328 21.373047 C 22.861328 18.494965 23.551973 16.599417 24.695312 15.410156 C 25.838652 14.220896 27.528004 13.621094 29.878906 13.621094 C 31.758714 13.621094 32.490022 13.734993 33.185547 13.820312 L 33.185547 16.701172 L 30.738281 16.701172 C 29.349697 16.701172 28.210449 17.475903 27.619141 18.507812 C 27.027832 19.539724 26.84375 20.771816 26.84375 22.027344 L 26.84375 26.044922 L 32.966797 26.044922 L 32.421875 29.564453 L 26.84375 29.564453 L 26.84375 46.929688 L 27.978516 46.775391 C 38.71434 45.319366 47 36.126845 47 25 C 47 12.861562 37.138438 3 25 3 z M 25 5 C 36.057562 5 45 13.942438 45 25 C 45 34.729791 38.035799 42.731796 28.84375 44.533203 L 28.84375 31.564453 L 34.136719 31.564453 L 35.298828 24.044922 L 28.84375 24.044922 L 28.84375 22.027344 C 28.84375 20.989871 29.033574 20.060293 29.353516 19.501953 C 29.673457 18.943614 29.981865 18.701172 30.738281 18.701172 L 35.185547 18.701172 L 35.185547 12.009766 L 34.318359 11.892578 C 33.718567 11.811418 32.349197 11.621094 29.878906 11.621094 C 27.175808 11.621094 24.855567 12.357448 23.253906 14.023438 C 21.652246 15.689426 20.861328 18.170128 20.861328 21.373047 L 20.861328 24.046875 L 15.664062 24.046875 L 15.664062 31.566406 L 20.861328 31.566406 L 20.861328 44.470703 C 11.816995 42.554813 5 34.624447 5 25 C 5 13.942438 13.942438 5 25 5 z"></path>
                  </svg>
                </span>

                {/* TOP */}
                <span className="absolute left-0 top-0 h-[2px] w-0 bg-yellow-400 transition-all duration-100 group-hover:w-full" />

                {/* RIGHT */}
                <span className="absolute right-0 top-0 h-0 w-[2px] bg-yellow-400 transition-all delay-100 duration-100 group-hover:h-full" />

                {/* BOTTOM */}
                <span className="absolute bottom-0 right-0 h-[2px] w-0 bg-yellow-400 transition-all delay-200 duration-100 group-hover:w-full" />

                {/* LEFT */}
                <span className="absolute bottom-0 left-0 h-0 w-[2px] bg-yellow-400 transition-all delay-300 duration-100 group-hover:h-full" />
              </button>

              <button className="group relative px-4 py-2 font-medium text-slate-100 transition-colors duration-[400ms] hover:text-yellow-400">
                <span>
                  {" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="30"
                    height="30"
                    viewBox="0 0 50 50"
                    fill="#FFFFFF"
                    className="animate__animated animate__fadeIn animate__delay-2s"
                  >
                    <path d="M 5.5 7 C 3.03125 7 1.011719 9.015625 1 11.484375 C 1 11.484375 1 11.488281 1 11.492188 C 1 11.496094 1 11.496094 1 11.5 L 1 38.5 C 1 40.972656 3.027344 43 5.5 43 L 44.5 43 C 46.972656 43 49 40.972656 49 38.5 L 49 11.5 C 49 11.496094 49 11.496094 49 11.492188 C 49 11.488281 49 11.484375 49 11.484375 C 48.988281 9.015625 46.96875 7 44.5 7 Z M 8.101563 9 L 41.902344 9 L 25 20.78125 Z M 4.773438 9.117188 L 25 23.21875 L 45.230469 9.117188 C 46.253906 9.425781 46.992188 10.355469 47 11.488281 C 46.996094 11.699219 46.78125 12.121094 46.46875 12.460938 C 46.152344 12.804688 45.84375 13.019531 45.84375 13.019531 L 45.839844 13.027344 L 25 27.777344 L 4.160156 13.027344 L 4.15625 13.019531 C 4.15625 13.019531 3.847656 12.804688 3.53125 12.460938 C 3.21875 12.121094 3.003906 11.699219 3 11.488281 C 3.007813 10.355469 3.746094 9.425781 4.773438 9.117188 Z M 3 14.652344 C 3 14.652344 3.007813 14.660156 3.007813 14.660156 L 3.015625 14.664063 L 3.015625 14.667969 L 6 16.777344 L 6 41 L 5.5 41 C 4.109375 41 3 39.890625 3 38.5 Z M 47 14.652344 L 47 38.5 C 47 39.890625 45.890625 41 44.5 41 L 44 41 L 44 16.777344 L 46.984375 14.667969 L 46.984375 14.664063 C 46.984375 14.664063 47 14.652344 47 14.652344 Z M 8 18.191406 L 25 30.222656 L 42 18.191406 L 42 41 L 8 41 Z"></path>
                  </svg>
                </span>

                {/* TOP */}
                <span className="absolute left-0 top-0 h-[2px] w-0 bg-yellow-400 transition-all duration-100 group-hover:w-full" />

                {/* RIGHT */}
                <span className="absolute right-0 top-0 h-0 w-[2px] bg-yellow-400 transition-all delay-100 duration-100 group-hover:h-full" />

                {/* BOTTOM */}
                <span className="absolute bottom-0 right-0 h-[2px] w-0 bg-yellow-400 transition-all delay-200 duration-100 group-hover:w-full" />

                {/* LEFT */}
                <span className="absolute bottom-0 left-0 h-0 w-[2px] bg-yellow-400 transition-all delay-300 duration-100 group-hover:h-full" />
              </button>

              <div>
                <button className="group relative px-4 py-2 font-medium text-slate-100 transition-colors duration-[400ms] hover:text-yellow-400">
                  <span>
                    {" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      width="30"
                      height="30"
                      viewBox="0 0 50 50"
                      fill="#FFFFFF"
                      className="animate__animated animate__fadeIn animate__delay-3s"
                    >
                      <path d="M 14 3.9902344 C 8.4886661 3.9902344 4 8.4789008 4 13.990234 L 4 35.990234 C 4 41.501568 8.4886661 45.990234 14 45.990234 L 36 45.990234 C 41.511334 45.990234 46 41.501568 46 35.990234 L 46 13.990234 C 46 8.4789008 41.511334 3.9902344 36 3.9902344 L 14 3.9902344 z M 14 5.9902344 L 36 5.9902344 C 40.430666 5.9902344 44 9.5595687 44 13.990234 L 44 35.990234 C 44 40.4209 40.430666 43.990234 36 43.990234 L 14 43.990234 C 9.5693339 43.990234 6 40.4209 6 35.990234 L 6 13.990234 C 6 9.5595687 9.5693339 5.9902344 14 5.9902344 z M 18.048828 11.035156 C 16.003504 10.946776 14.45113 11.723922 13.474609 12.658203 C 12.986349 13.125343 12.633832 13.625179 12.392578 14.091797 C 12.151324 14.558415 11.998047 14.943108 11.998047 15.443359 C 11.998047 15.398799 11.987059 15.632684 11.980469 15.904297 C 11.973869 16.17591 11.97507 16.542045 12 16.984375 C 12.04996 17.869036 12.199897 19.065677 12.597656 20.484375 C 13.393174 23.321771 15.184446 27.043821 19.070312 30.929688 C 22.95618 34.815554 26.678014 36.606575 29.515625 37.402344 C 30.93443 37.800228 32.130881 37.949937 33.015625 38 C 33.457997 38.02503 33.822105 38.026091 34.09375 38.019531 C 34.365395 38.012931 34.601049 38.001953 34.556641 38.001953 C 35.056892 38.001953 35.441585 37.848676 35.908203 37.607422 C 36.374821 37.366168 36.874657 37.013651 37.341797 36.525391 C 38.276078 35.54887 39.053222 33.996496 38.964844 31.951172 C 38.922907 30.975693 38.381316 30.111858 37.582031 29.599609 C 36.96435 29.203814 36.005458 28.589415 34.753906 27.789062 C 33.301811 26.861299 31.44451 26.795029 29.929688 27.625 L 30.015625 27.582031 L 28.837891 28.087891 L 28.751953 28.148438 C 28.465693 28.349428 28.111154 28.386664 27.789062 28.251953 C 26.886813 27.874649 25.480985 27.133329 24.173828 25.826172 C 22.866671 24.519015 22.125351 23.113186 21.748047 22.210938 C 21.613336 21.888845 21.650568 21.534307 21.851562 21.248047 L 21.912109 21.162109 L 22.417969 19.984375 L 22.375 20.070312 C 23.204764 18.555868 23.140248 16.698619 22.210938 15.246094 C 21.410584 13.994542 20.796186 13.03565 20.400391 12.417969 C 19.888142 11.618684 19.02431 11.077096 18.048828 11.035156 z M 17.962891 13.033203 C 18.243409 13.045263 18.533045 13.209378 18.716797 13.496094 C 19.113001 14.114413 19.727696 15.07377 20.527344 16.324219 C 21.058033 17.153694 21.09533 18.243821 20.621094 19.109375 L 20.597656 19.152344 L 20.115234 20.279297 L 20.214844 20.097656 C 19.623835 20.939396 19.505055 22.032514 19.902344 22.982422 C 20.35304 24.060173 21.214923 25.695392 22.759766 27.240234 C 24.304608 28.785077 25.939827 29.64696 27.017578 30.097656 C 27.967486 30.494945 29.060604 30.376165 29.902344 29.785156 L 29.720703 29.884766 L 30.847656 29.402344 L 30.890625 29.378906 C 31.755801 28.904877 32.845877 28.944375 33.675781 29.474609 L 33.675781 29.472656 C 34.92623 30.272304 35.885587 30.886999 36.503906 31.283203 C 36.790622 31.466955 36.954736 31.756591 36.966797 32.037109 C 37.032417 33.555785 36.504954 34.506599 35.896484 35.142578 C 35.59225 35.460568 35.262335 35.691348 34.990234 35.832031 C 34.718133 35.972715 34.457889 36.001953 34.556641 36.001953 C 34.373232 36.001953 34.276633 36.013981 34.046875 36.019531 C 33.817117 36.025131 33.509144 36.025436 33.128906 36.003906 C 32.368431 35.960876 31.318757 35.831053 30.054688 35.476562 C 27.526547 34.767581 24.137509 33.168759 20.484375 29.515625 C 16.831241 25.862491 15.232169 22.473167 14.523438 19.945312 C 14.169071 18.681386 14.039037 17.631464 13.996094 16.871094 C 13.974624 16.490908 13.974899 16.18286 13.980469 15.953125 C 13.986069 15.72339 13.998047 15.626918 13.998047 15.443359 C 13.998047 15.542109 14.027287 15.281867 14.167969 15.009766 C 14.308652 14.737665 14.539432 14.40775 14.857422 14.103516 C 15.493401 13.495046 16.444215 12.967581 17.962891 13.033203 z"></path>
                    </svg>
                  </span>

                  {/* TOP */}
                  <span className="absolute left-0 top-0 h-[2px] w-0 bg-yellow-400 transition-all duration-100 group-hover:w-full" />

                  {/* RIGHT */}
                  <span className="absolute right-0 top-0 h-0 w-[2px] bg-yellow-400 transition-all delay-100 duration-100 group-hover:h-full" />

                  {/* BOTTOM */}
                  <span className="absolute bottom-0 right-0 h-[2px] w-0 bg-yellow-400 transition-all delay-200 duration-100 group-hover:w-full" />

                  {/* LEFT */}
                  <span className="absolute bottom-0 left-0 h-0 w-[2px] bg-yellow-400 transition-all delay-300 duration-100 group-hover:h-full" />
                </button>
              </div>
              <div>
                <button className="group relative px-4 py-2 font-medium text-slate-100 transition-colors duration-[400ms] hover:text-yellow-400">
                  <span>
                    {" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      width="30"
                      height="30"
                      viewBox="0 0 50 50"
                      fill="#FFFFFF"
                      className="animate__animated animate__fadeIn animate__delay-4s"
                    >
                      <path d="M 24.402344 9 C 17.800781 9 11.601563 9.5 8.300781 10.199219 C 6.101563 10.699219 4.199219 12.199219 3.800781 14.5 C 3.402344 16.898438 3 20.5 3 25 C 3 29.5 3.398438 33 3.898438 35.5 C 4.300781 37.699219 6.199219 39.300781 8.398438 39.800781 C 11.902344 40.5 17.898438 41 24.5 41 C 31.101563 41 37.097656 40.5 40.597656 39.800781 C 42.800781 39.300781 44.699219 37.800781 45.097656 35.5 C 45.5 33 46 29.402344 46.097656 24.902344 C 46.097656 20.402344 45.597656 16.800781 45.097656 14.300781 C 44.699219 12.101563 42.800781 10.5 40.597656 10 C 37.097656 9.5 31 9 24.402344 9 Z M 24.402344 11 C 31.601563 11 37.398438 11.597656 40.199219 12.097656 C 41.699219 12.5 42.898438 13.5 43.097656 14.800781 C 43.699219 18 44.097656 21.402344 44.097656 24.902344 C 44 29.199219 43.5 32.699219 43.097656 35.199219 C 42.800781 37.097656 40.800781 37.699219 40.199219 37.902344 C 36.597656 38.601563 30.597656 39.097656 24.597656 39.097656 C 18.597656 39.097656 12.5 38.699219 9 37.902344 C 7.5 37.5 6.300781 36.5 6.101563 35.199219 C 5.300781 32.398438 5 28.699219 5 25 C 5 20.398438 5.402344 17 5.800781 14.902344 C 6.101563 13 8.199219 12.398438 8.699219 12.199219 C 12 11.5 18.101563 11 24.402344 11 Z M 19 17 L 19 33 L 33 25 Z M 21 20.402344 L 29 25 L 21 29.597656 Z"></path>
                    </svg>
                  </span>

                  {/* TOP */}
                  <span className="absolute left-0 top-0 h-[2px] w-0 bg-yellow-400 transition-all duration-100 group-hover:w-full" />

                  {/* RIGHT */}
                  <span className="absolute right-0 top-0 h-0 w-[2px] bg-yellow-400 transition-all delay-100 duration-100 group-hover:h-full" />

                  {/* BOTTOM */}
                  <span className="absolute bottom-0 right-0 h-[2px] w-0 bg-yellow-400 transition-all delay-200 duration-100 group-hover:w-full" />

                  {/* LEFT */}
                  <span className="absolute bottom-0 left-0 h-0 w-[2px] bg-yellow-400 transition-all delay-300 duration-100 group-hover:h-full" />
                </button>
              </div>
              <div>
                <button className="group relative px-4 py-2 font-medium text-slate-100 transition-colors duration-[400ms] hover:text-yellow-400">
                  <span>
                    {" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      width="30"
                      height="30"
                      viewBox="0 0 50 50"
                      fill="#FFFFFF"
                      className="animate__animated animate__fadeIn animate__delay-5s"
                    >
                      <path d="M 9 4 C 6.2504839 4 4 6.2504839 4 9 L 4 41 C 4 43.749516 6.2504839 46 9 46 L 41 46 C 43.749516 46 46 43.749516 46 41 L 46 9 C 46 6.2504839 43.749516 4 41 4 L 9 4 z M 9 6 L 41 6 C 42.668484 6 44 7.3315161 44 9 L 44 41 C 44 42.668484 42.668484 44 41 44 L 9 44 C 7.3315161 44 6 42.668484 6 41 L 6 9 C 6 7.3315161 7.3315161 6 9 6 z M 14 11.011719 C 12.904779 11.011719 11.919219 11.339079 11.189453 11.953125 C 10.459687 12.567171 10.011719 13.484511 10.011719 14.466797 C 10.011719 16.333977 11.631285 17.789609 13.691406 17.933594 A 0.98809878 0.98809878 0 0 0 13.695312 17.935547 A 0.98809878 0.98809878 0 0 0 14 17.988281 C 16.27301 17.988281 17.988281 16.396083 17.988281 14.466797 A 0.98809878 0.98809878 0 0 0 17.986328 14.414062 C 17.884577 12.513831 16.190443 11.011719 14 11.011719 z M 14 12.988281 C 15.392231 12.988281 15.94197 13.610038 16.001953 14.492188 C 15.989803 15.348434 15.460091 16.011719 14 16.011719 C 12.614594 16.011719 11.988281 15.302225 11.988281 14.466797 C 11.988281 14.049083 12.140703 13.734298 12.460938 13.464844 C 12.78117 13.19539 13.295221 12.988281 14 12.988281 z M 11 19 A 1.0001 1.0001 0 0 0 10 20 L 10 39 A 1.0001 1.0001 0 0 0 11 40 L 17 40 A 1.0001 1.0001 0 0 0 18 39 L 18 33.134766 L 18 20 A 1.0001 1.0001 0 0 0 17 19 L 11 19 z M 20 19 A 1.0001 1.0001 0 0 0 19 20 L 19 39 A 1.0001 1.0001 0 0 0 20 40 L 26 40 A 1.0001 1.0001 0 0 0 27 39 L 27 29 C 27 28.170333 27.226394 27.345035 27.625 26.804688 C 28.023606 26.264339 28.526466 25.940057 29.482422 25.957031 C 30.468166 25.973981 30.989999 26.311669 31.384766 26.841797 C 31.779532 27.371924 32 28.166667 32 29 L 32 39 A 1.0001 1.0001 0 0 0 33 40 L 39 40 A 1.0001 1.0001 0 0 0 40 39 L 40 28.261719 C 40 25.300181 39.122788 22.95433 37.619141 21.367188 C 36.115493 19.780044 34.024172 19 31.8125 19 C 29.710483 19 28.110853 19.704889 27 20.423828 L 27 20 A 1.0001 1.0001 0 0 0 26 19 L 20 19 z M 12 21 L 16 21 L 16 33.134766 L 16 38 L 12 38 L 12 21 z M 21 21 L 25 21 L 25 22.560547 A 1.0001 1.0001 0 0 0 26.798828 23.162109 C 26.798828 23.162109 28.369194 21 31.8125 21 C 33.565828 21 35.069366 21.582581 36.167969 22.742188 C 37.266572 23.901794 38 25.688257 38 28.261719 L 38 38 L 34 38 L 34 29 C 34 27.833333 33.720468 26.627107 32.990234 25.646484 C 32.260001 24.665862 31.031834 23.983076 29.517578 23.957031 C 27.995534 23.930001 26.747519 24.626988 26.015625 25.619141 C 25.283731 26.611293 25 27.829667 25 29 L 25 38 L 21 38 L 21 21 z"></path>{" "}
                    </svg>
                  </span>

                  {/* TOP */}
                  <span className="absolute left-0 top-0 h-[2px] w-0 bg-yellow-400 transition-all duration-100 group-hover:w-full" />

                  {/* RIGHT */}
                  <span className="absolute right-0 top-0 h-0 w-[2px] bg-yellow-400 transition-all delay-100 duration-100 group-hover:h-full" />

                  {/* BOTTOM */}
                  <span className="absolute bottom-0 right-0 h-[2px] w-0 bg-yellow-400 transition-all delay-200 duration-100 group-hover:w-full" />

                  {/* LEFT */}
                  <span className="absolute bottom-0 left-0 h-0 w-[2px] bg-yellow-400 transition-all delay-300 duration-100 group-hover:h-full" />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="px-8 flex justify-center  animate__animated animate__backInUp animate__slow">
          <img
            src="https://qresorts.in/imageserve/0/assets/images/title-4.jpg"
            class={`w-1/6 rounded-xl mr-2 object-cover ${
              current != 1 ? "opacity-10" : "opacity-100"
            } transition-opacity duration-300 ease-in`}
            onMouseEnter={() => setCurrent(1)}
          />
          <img
            src="https://qresorts.in/uploads/59991b6ebf9ef_01-01.jpg"
            class={`w-1/6 rounded-xl mr-2 object-cover ${
              current != 2 ? "opacity-10" : "opacity-100"
            } transition-opacity duration-300 ease-in`}
            onMouseEnter={() => setCurrent(2)}
          />
          <img
            src="https://qresorts.in/uploads/59e873fbb24d4_2.jpg"
            class={`w-1/6 rounded-xl mr-2 object-cover ${
              current != 3 ? "opacity-10" : "opacity-100"
            } transition-opacity duration-300 ease-in`}
            onMouseEnter={() => setCurrent(3)}
          />
          <img
            src="https://qresorts.in/uploads/59991bf62b345_9R0A2015.jpg"
            class={`w-1/6 rounded-xl mr-2 object-cover ${
              current != 4 ? "opacity-10" : "opacity-100"
            } transition-opacity duration-300 ease-in`}
            onMouseEnter={() => setCurrent(4)}
          />
          <img
            src="https://www.keralatourism.org/uploads/destination-wedding/images/large/9r0a2065-20230330053527466181.jpg"
            class={`w-1/6 rounded-xl mr-2 object-cover ${
              current != 5 ? "opacity-10" : "opacity-100"
            } transition-opacity duration-300 ease-in`}
            onMouseEnter={() => setCurrent(5)}
          />
          <img
            src="
          https://www.keralatourism.org/uploads/destination-wedding/images/large/22-20230330053557644543.jpg"
            class={`w-1/6 rounded-xl mr-2 object-cover ${
              current != 6 ? "opacity-10" : "opacity-100"
            } transition-opacity duration-300 ease-in`}
            onMouseEnter={() => setCurrent(6)}
          />
        </div>
      </motion.div>
    </>
  );
};

export default Landing;
