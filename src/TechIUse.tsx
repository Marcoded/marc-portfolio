import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import typeScriptLogo from "/typescript-logo.png";
import es6Logo from "/es6.jpg";
import railsLogo from "/Ruby_On_Rails_Logo.svg";
import rubyLogo from "/Ruby_logo.svg";
import tailwindLogo from "/tailwindlogo.png";
import TitleAndDivider from "./Title-and-divider";
import { motion } from "framer-motion";

const TechIUse = () => {
  return (
    <motion.div
      className="  mx-auto mb-64 max-w-5xl  px-5 py-5 md:px-20 "
      initial={{ opacity: 0, filter: "blur(5px)" }}
      whileInView={{ opacity: 1, filter: "blur(0px)" }}
      transition={{ duration: 0.5 }}
    >
      <TitleAndDivider number={2} title="My tools" />

      <div className="mt-16 grid grid-cols-3 gap-16 md:grid-cols-6">
        <div className="flex items-center justify-center">
          <div className="group relative">
            <a
              href="https://es6-features.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="absolute left-2 top-3 h-16 rounded transition-all duration-500 group-hover:translate-y-2/3"
                src={es6Logo}
                alt="ES6 logo"
              />
            </a>
            <a
              href="https://www.typescriptlang.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="relative z-10 h-16 transition-all duration-500"
                src={typeScriptLogo}
                alt="Typescript logo"
              />
            </a>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <a
            href="https://reactjs.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-auto"
          >
            <img
              className="h-16 animate-spin-slow"
              src={reactLogo}
              alt="React logo"
            />
          </a>
        </div>
        <div className="flex items-center justify-center">
          <a
            href="https://vitejs.dev/"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-auto"
          >
            <img
              className="h-16 bg-transparent"
              src={viteLogo}
              alt="Vite logo"
            />
          </a>
        </div>
        <div className="flex items-center justify-center">
          <a
            href="https://ruby-lang.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-auto"
          >
            <img
              className="h-16 drop-shadow-xl filter transition-all duration-500 hover:rotate-3"
              src={rubyLogo}
              alt="Ruby logo"
            />
          </a>
        </div>
        <div className="flex items-center justify-center">
          <a
            href="https://rubyonrails.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-auto"
          >
            <img
              className="h-16 drop-shadow-xl filter"
              src={railsLogo}
              alt="Ruby on Rails logo"
            />
          </a>
        </div>
        <div className="flex items-center justify-center">
          <a
            href="https://tailwindcss.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-auto"
          >
            <img
              className="hover:saturate-125 h-16 drop-shadow-xl filter transition-all duration-500"
              src={tailwindLogo}
              alt="Tailwind CSS logo"
            />
          </a>
        </div>
      </div>
      <p className="text-md mt-16 lg:text-xl">
        I leverage <span className="text-accent">Vite</span> and{" "}
        <span className="text-accent">React JS</span> for nimble, dynamic UIs,
        paired with the design utility of{" "}
        <span className="text-accent">Tailwind CSS</span>.{" "}
        <span className="text-accent">Ruby on Rails</span> simplifies my backend
        work, while <span className="text-accent">TypeScript</span> ensures my
        JavaScript is robust and reliable. This unique combination empowers me
        to craft efficient and effective web applications.
      </p>
    </motion.div>
  );
};

export default TechIUse;
