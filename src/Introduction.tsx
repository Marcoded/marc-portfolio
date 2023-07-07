import TitleAndDivider from "./Title-and-divider";
import { motion } from "framer-motion";
import marcPhoto from "/marcPhoto.jpg";

const Introduction = () => {
  return (
    <motion.div
      initial={{ opacity: 0, filter: "blur(5px)" }}
      whileInView={{ opacity: 1, filter: "blur(0px)" }}
      transition={{ duration: 0.5 }}
      className="mx-auto mb-64 max-w-5xl px-5  py-5 md:px-20 "
    >
      <TitleAndDivider number={1} title="A bit about me" />
      <div className="mt-10 flex flex-col items-center  md:flex-row md:space-x-10">
        <div className="md:w-2/3">
          <div className="mb-8">
            <p className="text-md lg:text-xl">
              After completing my master's degree in
              <span className="text-accent"> Marketing</span>, I dove into the
              world of
              <span className="text-accent"> product management</span>. My
              passion was initially centered around marketing and business.
              While I've always had an interest in technology, I never really
              attempted coding before.
              <br />
            </p>
          </div>
          <div className="mb-8">
            <p className="text-md lg:text-xl">
              As a <span className="text-accent">Product Manager</span>, I
              quickly realized the necessity to understand not just our users,
              but also the technical aspects of developing a{" "}
              <span className="text-accent">SaaS</span>. This spurred my journey
              into web development about 2 years ago. Currently, I have both
              coding skills and business acumen in my toolbox. While
              understanding the business side has its advantages, I'm now
              primarily focused on coding. I'm excited to apply my coding
              abilities in a team, and I'm committed to constantly improving my
              technical skills
            </p>
          </div>
        </div>

        <div className="flex justify-center md:w-1/3 ">
          <div className="aspect-[1/1] max-h-[15rem] max-w-[15rem]">
            <img
              src={marcPhoto}
              className="h-full w-full rounded-lg object-cover object-top  shadow-[5px_5px_rgba(0,_0,_139,_0.4),_10px_10px_rgba(0,_0,_139,_0.3),_15px_15px_rgba(0,_0,_139,_0.2),_20px_20px_rgba(0,_0,_139,_0.1),_25px_25px_rgba(0,_0,_139,_0.05)]"
              alt="Paravol"
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Introduction;
