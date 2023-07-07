import TitleAndDivider from "./Title-and-divider";
import gitHubLogo from "/github-mark-white.svg";
import linkedInLogo from "/linkedin-svgrepo-com-white.svg";
import mailLogo from "/mail-logo-white.svg";
import { motion } from "framer-motion";

const ContactInfo = () => {
  return (
    <motion.div className="mx-auto mb-32 max-w-5xl px-5 py-5 md:px-20"
    initial={{ opacity: 0, filter: "blur(5px)" }}
    whileInView={{ opacity: 1, filter: "blur(0px)" }}
    transition={{ duration: 0.5 }}
    >
      <TitleAndDivider number={4} title="Let's get in touch" />
      <div className="mt-16 flex justify-evenly">
        <div className="group relative transition-all">
          <a
            href="https://github.com/Marcoded"
            target="_blank"
            rel="noreferrer"
            className="block h-full w-full"
          >
            <div className="flex items-center justify-center gap-5 p-3 rounded-md group-hover:bg-slate-800/50 group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] group-hover:drop-shadow-lg motion-reduce:transition-none">
              <img
                className="h-8 brightness-50 group-hover:brightness-100"
                src={gitHubLogo}
                alt="See my Github"
              ></img>
              @Marcoded
            </div>
          </a>
        </div>
        <div className="group relative transition-all">
          <a
            href="https://www.linkedin.com/in/marc-pollet/"
            className="block h-full w-full"
          >
            <div className="flex items-center justify-center gap-5 p-3 rounded-md group-hover:bg-slate-800/50 group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] group-hover:drop-shadow-lg motion-reduce:transition-none">
              <img
                className="h-8 brightness-50 group-hover:brightness-100"
                src={linkedInLogo}
                alt="See my LinkedIn"
              />
              LinkedIn
            </div>
          </a>
        </div>
        <div className="group relative transition-all">
          <a href="mailto:marc.pollet@dev" className="block h-full w-full">
            <div className="flex items-center justify-center gap-5 p-3 rounded-md brightness-100 group-hover:bg-slate-800/50 group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] group-hover:drop-shadow-lg motion-reduce:transition-none">
              <img
                className="h-8 brightness-50 group-hover:brightness-100"
                src={mailLogo}
                alt=""
              />
              marc@pollet.dev
            </div>
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default ContactInfo;
