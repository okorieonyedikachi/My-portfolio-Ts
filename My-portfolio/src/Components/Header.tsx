import Me from "../assets/IMG_7825.jpg";
import { motion, spring} from "framer-motion"
import tailwind from '../assets/tailwind-css.svg'
import js from '../assets/javascript-js.svg'
import graphql from '../assets/graphql.svg'
import ts from '../assets/typescript-icon.svg'
import react from '../assets/react.svg'

const Header = () => {
  return (
    <div className="h-screen w-full flex justify-center max-sm:w-full max-sm:bg-gay-400 max-sm:flex-col-reverse max-sm:h-fit">
      <div className="w-2/5 ml-8 m-auto max-sm:m-auto max-sm:w-full">
          <motion.section className="bg-red-80 m-auto w-5/6 h-96 flex items-center justify-center rounded-lg max-sm:g-red-500"
            initial={{y: -250}}
            animate={{y: 0}}
            transition={{duration:0.5, type:spring}}
          >
            <div className="mt-5 my-8 items-center">
              <div className="text-2xl font-bold my-6">Hi There!</div>
              <p className="font-bold text-4xl">Call me, <span className="text-gray-400">Dannie</span></p>
              <p className="w-max my-2 text-xs font-semibold text-white bg-gray-800 p-1">PHOTOGRAPHER/FRONT-END DEVELOPER</p>
              <p className="mb-7">
                A photographer and frontend web developer with a great eye for design. I enjoy
                crafting unique web experiences
              </p>
              <p>Skill set:</p>
              <div className="w-full h-12 flex gap-2 mb-7">
                
                <img src={ts} alt="" className="h-full"/>
                <img src={js} alt="" className="h-full"/>
                <img src={graphql} alt="" className="h-full"/>
                <img src={tailwind} alt="" className="h-full"/>
                <img src={react} alt="" className="h-full"/>
              </div>
              <button className="w-40 bg-gray-400 rounded-xl h-10 hover:before:bg-orange-400">Reach Out</button>
            </div>
          </motion.section>
        
      </div>
      <motion.div className="w-3/5 max-sm:w-full"
         initial={{y: -700, opacity: 0}}
         animate={{y: 0, opacity:1}}
         transition={{duration:0.5, type:"tween"}}
      >
        <img
          src={Me} 
          alt="A photo of me"
          className="h-full w-full rounded-lg bg-blue-500 object-cover"
        />
      </motion.div>
    </div>
  );
};

export default Header;
