// import {motion} from "framer-motion"

import { skills } from "../data";
import Contact from "./Contact";
import Projects from "./Projects";

const Body = () => {
  return (
    <div className="w-full flex flex-col items-center max-sm:text-left">
      <div className="text-slate-300 w-[94%] justify-center items-center flex flex-col mt-10 h-full ">
        <span className="text-lg pl-20 mb-3 max-sm:pl-0 w-full">I AM </span>
        <h1 className="text-8xl font-extrabold max-sm:text-4xl mr-auto break-words">
          ONYEDIKACHI COSMAS|
        </h1>
        <div className="w-6/12  mt-6 p-10 ml-auto right-0 relative max-sm:w-full max-sm:p-1 max-md:w-11/12">
          <h3 className="text-2xl font-bold">ABOUT ME |</h3>
          <h4 className="text-lg whitespace-normal ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </h4>
          <div className="mt-6">
            <h3 className="text-2xl font-bold">SKILLS |</h3>
              <ul className=" flex flex-wrap">
                {skills.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-center justify-center gap-3 mb- flex-wrap mr-9 pr-3"
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
