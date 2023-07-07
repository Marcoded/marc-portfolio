import { motion } from "framer-motion";
import Project from "./Project";
import TitleAndDivider from "./Title-and-divider";
import waldoPreview from "/whereIsWaldo.png";
import photogramPreview from "/photogramPreview.png";
import memoryGamePreview from "/memoryGamePreview.png";


const ProjectsCarousel = () => {
  return (
    <div className="max-w-5xl mx-auto grid gap-y-10 px-5 py-5 md:px-20">
      <TitleAndDivider number={3} title="My work" />

      <motion.div
        initial={{ opacity: 0, filter: "blur(5px)", x: -200 }}
        whileInView={{ opacity: 1, filter: "blur(0px)", x: 0 }}
        transition={{ duration: 0.3, delay: 0.1 }}
      >
        <Project
          name="Photogram"
          description="A full-stack social media clone featuring Google sign-in using Devise gem & Omniauth, dark mode, client-side image validation, and much more."
          photoRef={photogramPreview}
          readMeUrl="https://github.com/marcoded/social-media-clone-react-rails-oauth2#readme"
          hostedUrl="https://mysite-8fqi.onrender.com/"
          techUsed={["React", "Rails", "Tailwind CSS"]}
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, filter: "blur(5px)", x: +200 }}
        whileInView={{ opacity: 1, filter: "blur(0px)", x: 0 }}
        transition={{ duration: 0.3, delay: 0.2 }}
      >
        <Project
          name="Arrival memory game"
          description="A card memory game built with React, Vite, and Tailwind CSS."
          photoRef={memoryGamePreview}
          readMeUrl="https://github.com/marcoded/arrival-memory-card-react"
          hostedUrl="https://marcoded.github.io/arrival-memory-card-react/"
          techUsed={["React", "Vite", "Tailwind CSS"]}
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, filter: "blur(5px)", x: -200 }}
        whileInView={{ opacity: 1, filter: "blur(0px)", x: 0 }}
        transition={{ duration: 0.3, delay: 0.3 }}
      >
        <Project
          name="Where is Waldo"
          description="A photo tagging app built with React and Ruby on Rails. When a user clicks an image, the validation happens in the back-end."
          photoRef={waldoPreview}
          readMeUrl="https://github.com/marcoded/arrival-memory-card-react"
          hostedUrl="https://marcoded.github.io/arrival-memory-card-react/"
          techUsed={["React", "Vite", "Tailwind CSS"]}
        />
      </motion.div>
    </div>
  );
};

export default ProjectsCarousel;
