// import {motion} from "framer-motion"
import Typewriter from "typewriter-effect";

import { skills } from "../data";
import Contact from "./Contact";
import Projects from "./Projects";
import { ToastContainer } from "react-toastify";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const Body = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div className="w-full flex flex-col items-center max-sm:text-left">
      <div className="text-slate-300 w-[94%] justify-center items-center flex flex-col mt-10 h-full ">
        <span className="text-xl pl mb-3 max-sm:pl-0 w-full ">
          HELLO THERE, I AM{" "}
        </span>

        <h1 className="text-8xl font-extrabold max-sm:text-4xl mr-auto break-word shadow-2xl shadow-zinc-950">
          <Typewriter
            options={{
              strings: ["ONYEDIKACHI COSMAS"],
              autoStart: true,
              loop: true,
            }}
          />
        </h1>
        <div
          data-aos="fade-left"
          className="w-6/12  mt-6 p-10 ml-auto right-0 relative max-sm:w-full max-sm:p-1 max-md:w-11/12 hover:shadow-2xl hover:shadow-zinc-950 hover:border-zinc-950 hover:border-[1px] rounded-lg"
        >
          <h3 className="text-2xl font-bold text-orange-500">ABOUT ME |</h3>
          <h4 className="text-lg whitespace-normal mb-4">
            Hi I'm Onyedikachi Cosmas Okorie, a tech enthusiast driven by an
            insatiable curiosity for innovation and problem-solving. I have a
            knack for seeing the world through the lens of creativity, finding
            joy in unraveling complex tech challenges, and crafting solutions
            that make a difference.
          </h4>
          <h4 className="text-lg whitespace-normal ">
            Levaraging my expertise in creative photography and frontend
            development my goal is to promote a culture of creativity and
            technological advancement one project at a time. I want to set a
            stage where teachnology seamlessly merges with the captivating world
            of visual artistry by crafting more intuitve,immersive user-centric
            interfaces. Oh yea call me Dannie 🙂.
          </h4>
          <div className="mt-6">
            <h3 className="text-2xl font-bold text-orange-500">SKILLS |</h3>
            <ul className=" flex flex-wrap">
              {skills.map((item, index) => (
                <li
                  key={index}
                  className="flex items-center justify-center gap-3 mb- flex-wrap mr-9 pr-3 text-orange-10`0"
                >
                  <span className="text-5xl pb-6 bg-red-00">.</span> {item.text}{" "}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <Projects />
      <Contact />
      <ToastContainer />
    </div>
  );
};

export default Body;

// <div className="w-11/12 bg-rd-700 m-auto mt-8 ">
//      <h1 className='text-2xl font-bold mb-4'>PROJECTS</h1>
//     <motion.section className="bg-gay-700 w-full m-auto my-6 max-sm:w-full"
//          initial={{ opacity: 0 }}
//          whileInView={{ opacity: 1 }}
//          transition={{duration:0.5}}
//     >
//         <div className="flex w-full flex-wrap gap-6 justify-center">
//             <motion.div className="bg-gray-100 shadow-md width w-5/12 h-96 rounded-lg max-sm:w-full"
//                 whileHover={{ scale: 1.1 }}
//             >
//                 <img src={gallery} alt="" className="w-full h-80"/>
//                 <a href="https://drag-drop-app-five.vercel.app" target="blank"><p className="p-4">Photo Gallery</p></a>
//             </motion.div>
//             <motion.div className="bg-gray-100 shadow-md width w-5/12 h-96 rounded-lg max-sm:w-full"
//                 whileHover={{ scale: 1.1 }}
//             >
//                 <img src={rick} alt="" className="w-full h-80"/>
//                 <a href="https://github.com/okorieonyedikachi/RickandMorty-Ts"target="blank"><p className="p-4">Rick and Morty website clone</p></a>
//             </motion.div>
//             <motion.div className="bg-gray-100 shadow-mdwidth w-5/12 h-96 rounded-lg max-sm:w-full"
//                 whileHover={{ scale: 1.1 }}
//             >
//                 <img src={calc} alt="" className="w-full h-80"/>
//                 <a href="https://github.com/okorieonyedikachi/Calculator-"target="blank"><p className="p-4">Mini Calculator</p></a>
//             </motion.div>
//             <motion.div className="bg-gray-100 shadow-md width w-5/12 h-96 rounded-lg max-sm:w-full"
//                 whileHover={{ scale: 1.1 }}
//             >
//                 <img src={movie} alt="" className="w-full h-80"/>
//                 <a href="https://hng-task2-liart.vercel.app" target="blank"><p className="p-4">Movie Gallery</p></a>
//             </motion.div>

//         </div>
//     </motion.section>

// </div>
