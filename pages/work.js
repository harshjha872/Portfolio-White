import { motion } from "framer-motion";
import { FaLocationDot } from "react-icons/fa6";
const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 5 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col md:w-[65vw] xl:w-[55vw] h-full m-auto px-6 md:mt-6 mt-3 dark:text-white"
    >
      {/* <div className="text-lg mb-4 sm:mb-4 md:mb-8">
        Dive into my exciting journey as a Developer! 🚀🌟
      </div> */}
      <div className="mb-8 mt-2 font-bold text-sm">EXPERIENCE</div>
      <div className="flex justify-between mb-8">
        <div>
          <div className="text-lg font-semibold ">
           SpectroNOVA
          </div>
          <div className="my-1 dark:text-zinc-400">
            Frontend Developer · Remote
          </div>{" "}
        <span className="dark:text-zinc-400">Mumbai, India </span>
        </div>
        <div className="dark:text-zinc-400">Oct &apos;23 - Present</div>
      </div>
      <hr className="h-px border-0 bg-neutral-300 dark:bg-neutral-800"></hr>
      <div className="flex justify-between mt-8 mb-72">
        <div>
          <div className="text-lg font-semibold ">
           Constems-AI Systems
          </div>
          <div className="my-1 dark:text-zinc-400">
            Full-stack Developer · Remote
          </div>{" "}
          <span className="dark:text-zinc-400">Noida, India </span>
        </div>
        <div className="dark:text-zinc-400">Apr &apos;23 - Sept &apos;23</div>
      </div>
      {/* <div className="flex flex-col m-0 mb-10">
        <div className="flex flex-row justify-between">
          <div className="text-3xl font-bold">Spectro Nova</div>
          <div className="flex justify-center items-center">
            <p>Oct &#39;23 - Present</p>
          </div>
        </div>
        <hr className="h-px my-1  border-0 bg-neutral-300 dark:bg-neutral-800"></hr>

        <div className="pt-4 text-lg">
          I Front end Developer
        </div>
      </div>
      <div className="flex flex-col m-0 mb-80">
        <div className="flex flex-row justify-between">
          <div className="text-3xl font-bold">Constems-AI</div>
          <div className="flex justify-center items-center">
            <p>Apr &#39;23 - Sept &#39;23</p>
          </div>
        </div>
        <hr className="h-px my-1  border-0 bg-neutral-300 dark:bg-neutral-800"></hr>

        <div className="pt-4 text-lg">
          I had the incredible opportunity to kickstart my career at Constems
          AI, a company diving deep into the AI world 🤖. From coding to
          collaborating on groundbreaking projects, I learned invaluable lessons
          in innovation, teamwork, and tech wizardry 🔮. Stay tuned for my next
          adventure!
        </div>
      </div> */}
    </motion.div>
  );
};

export default About;
