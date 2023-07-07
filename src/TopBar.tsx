import { motion } from "framer-motion";

const topBar = () => {
    return (
  
        <motion.div className="flex items-center pt-5 mx-10"
         initial={{ opacity: 0, filter: "blur(5px)" }}
         whileInView={{ opacity: 1, filter: "blur(0px)" }}
         transition={{ duration: 0.5 }}
        >
        <h1 className="font-inter max-text-2xl font-bold text-primary">&lt; Marc.Pollet.dev /&gt;</h1>
        <hr className="border-gray-500 border-t flex-grow mx-10" />
      </motion.div>

    )
}


export default topBar;