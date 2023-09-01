import { motion } from "framer-motion";
import Footer from "../components/footer/Footer";

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 5 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col md:w-[65vw] xl:w-[55vw] h-full m-auto px-6 md:mt-12 mt-7 dark:text-white"
    >
          <div className="flex flex-col m-0 mb-40">
        <div className="flex flex-row justify-between">
          
                  <div className="text-3xl font-bold">Constems-AI</div>
                  <div className="flex justify-center items-center">
                  <p >Apr &#39;23 - Sept &#39;23</p>
                  </div>
              </div>
        <hr className="h-px my-1  border-0 bg-neutral-300 dark:bg-neutral-800"></hr>
        <div className="pt-7 text-lg">
🌟 Dive into my exciting journey as a Full Stack Developer! 🚀

        </div>
        <div className="pt-4 text-lg">

I had the incredible opportunity to kickstart my career at Constems AI, a dynamic startup diving deep into the AI world 🤖. From coding to collaborating on groundbreaking projects, I learned invaluable lessons in innovation, teamwork, and tech wizardry 🔮. Stay tuned for my next adventure!
        </div>
      </div>
        <Footer />
    </motion.div>
  );
};

export default About;
