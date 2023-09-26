import {motion} from "framer-motion"
const Body = () => {
  return (
    <div className="w-11/12 bg-rd-700 m-auto mt-8 ">
         <h1 className='text-2xl font-bold'>Notable projects I have worked on</h1>
        <motion.section className="bg-gay-700 w-5/6 m-auto my-6 max-sm:w-full"
             initial={{ opacity: 0 }}
             whileInView={{ opacity: 1 }}
             transition={{duration:0.5}}
        >
            <div className="flex w-full flex-wrap gap-6 justify-center">
                <motion.div className="bg-orange-500 width w-5/12 h-96 rounded-lg max-sm:w-full"
                    whileHover={{ scale: 1.1 }}
                    
                >
                    <img src="../assets/react.svg" alt="" className="w-full h-80"/>
                    <p className="">Logictics web app</p>
                </motion.div>
                <motion.div className="bg-orange-500 width w-5/12 h-96 rounded-lg max-sm:w-full"
                    whileHover={{ scale: 1.1 }}
                >
                    <img src="../assets/react.svg" alt="" className="w-full h-80"/>
                    <p className="">Logictics web app</p>
                </motion.div>
                <motion.div className="bg-orange-500 width w-5/12 h-96 rounded-lg max-sm:w-full"
                    whileHover={{ scale: 1.1 }}
                >
                    <img src="../assets/react.svg" alt="" className="w-full h-80"/>
                    <p className="">Logictics web app</p>
                </motion.div>
                <motion.div className="bg-orange-500 width w-5/12 h-96 rounded-lg max-sm:w-full"
                    whileHover={{ scale: 1.1 }}
                >
                    <img src="../assets/react.svg" alt="" className="w-full h-80"/>
                    <p className="">Logictics web app</p>
                </motion.div>
                <motion.div className="bg-orange-500 width w-5/12 h-96 rounded-lg max-sm:w-full"
                    whileHover={{ scale: 1.1 }}
                >
                    <img src="../assets/react.svg" alt="" className="w-full h-80"/>
                    <p className="">Logictics web app</p>
                </motion.div>
            </div>
        </motion.section>
      
    </div>
  )
}

export default Body