import { motion } from "framer-motion";

const MainPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col w-[45vw] h-full items-center m-auto"
    >
      <div className="flex flex-col pt-40">
        <div className="text-5xl font-extrabold text-neutral-800">
          <span>Harsh Jha</span>
        </div>
        <div className="flex flex-row text-2xl my-4 ">
          <span className="text-slate-900">Im </span>
          <div className="text-blue-700 mx-2">Developer</div>
        </div>
        <div className="py-3 text-xl">
          Currently studying web development seeks an internship opportunity to
          expand skills and gain valuable real-world experience. hoping to gain
          work with a company that will benefit from my experience and passion.
        </div>
      </div>
    </motion.div>
  );
};

export default MainPage;
