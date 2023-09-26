import {motion} from "framer-motion"
import gallery from "../assets/gallery.png"
import rick from "../assets/rickandmorty.png"
import calc from '../assets/calc.png'
import movie from '../assets/screenshot.jpg'

const Body = () => {
  return (
    <div className="w-11/12 bg-rd-700 m-auto mt-8 ">
         <h1 className='text-2xl font-bold mb-4'>PROJECTS</h1>
        <motion.section className="bg-gay-700 w-5/6 m-auto my-6 max-sm:w-full"
             initial={{ opacity: 0 }}
             whileInView={{ opacity: 1 }}
             transition={{duration:0.5}}
        >
            <div className="flex w-full flex-wrap gap-6 justify-center">
                <motion.div className="bg-gray-100 shadow-md width w-5/12 h-96 rounded-lg max-sm:w-full"
                    whileHover={{ scale: 1.1 }}
                    
                >
                    <img src={gallery} alt="" className="w-full h-80"/>
                    <a href="https://drag-drop-app-five.vercel.app" target="blank"><p className="p-4">Photo Gallery</p></a>
                </motion.div>
                <motion.div className="bg-gray-100 shadow-md width w-5/12 h-96 rounded-lg max-sm:w-full"
                    whileHover={{ scale: 1.1 }}
                >
                    <img src={rick} alt="" className="w-full h-80"/>
                    <a href="https://github.com/okorieonyedikachi/RickandMorty-Ts"target="blank"><p className="p-4">Rick and Morty website clone</p></a>
                </motion.div>
                <motion.div className="bg-gray-100 shadow-mdwidth w-5/12 h-96 rounded-lg max-sm:w-full"
                    whileHover={{ scale: 1.1 }}
                >
                    <img src={calc} alt="" className="w-full h-80"/>
                    <a href="https://github.com/okorieonyedikachi/Calculator-"target="blank"><p className="p-4">Mini Calculator</p></a>
                </motion.div>
                <motion.div className="bg-gray-100 shadow-md width w-5/12 h-96 rounded-lg max-sm:w-full"
                    whileHover={{ scale: 1.1 }}
                >
                    <img src={movie} alt="" className="w-full h-80"/>
                    <a href="https://hng-task2-liart.vercel.app" target="blank"><p className="p-4">Movie Gallery</p></a>
                </motion.div>
                
            </div>
        </motion.section>
      
    </div>
  )
}

export default Body