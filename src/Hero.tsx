//import { Typewriter, useTypewriter } from "react-simple-typewriter";
import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";
const Hero = () => {
  return (
    <div className="mx-10 flex h-screen items-center justify-center">
      <div>
        <motion.div
          initial={{ opacity: 0, filter: "blur(15px)", y: -50 }}
          animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
          transition={{ duration: 1.2 }}
        >
          <h1 className="ml-1 text-base  text-primary sm:text-lg lg:text-2xl">
            Hi, my name is
          </h1>
          <h1 className="text-4xl font-bold  text-neutral-content sm:text-5xl lg:text-8xl">
            Marc Pollet
          </h1>

          <h1 className="text-4xl sm:text-5xl  lg:text-8xl">
            <Typewriter
              options={{
                delay: 35,
                deleteSpeed: 10,
                cursor: "|",
              }}
              onInit={(typewriter) => {
                typewriter
                  .pauseFor(1000)
                  .typeString("I build ")
                  .callFunction(() => {
                    console.log("String typed out!");
                  })
                  .pauseFor(100)
                  .typeString(
                    "<span class='text-primary'>Web Applications</span>"
                  )
                  .pauseFor(1000)
                  .deleteChars(16)
                  .typeString(
                    "<span class='text-accent'>user interfaces</span>"
                  )
                  .pauseFor(1000)
                  .deleteChars(15)
                  .changeDelay(100)
                  .typeString("<span class='text-secondary'>things </span>")

                  .typeString("for the web")

                  .start();
              }}
            />
          </h1>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
