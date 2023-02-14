import Image from "next/image";
import { BiLinkExternal } from "react-icons/bi";
import { motion } from "framer-motion";

const ProjectSinglePage = (props) => {
  const SubHeadingClass = "text-xl py-4 font-medium underline text-violet-500";
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="text-2xl font-bold pt-16 underline underline-offset-4 text-center">
        {props.title}
      </div>
      <div className="relative w-auto h-[22rem] my-16 justify-center items-center">
        <Image
          src={props.projectImage}
          alt="Picture of the author"
          layout="fill"
          objectFit="cover"
          loading="lazy"
        />
      </div>

      <div className="pb-20">
        <div className={SubHeadingClass}>About</div>
        {props.about}
        {props.link && <div className={SubHeadingClass}>Link</div>}
        {props.link && (
          <a
            target="_blank"
            rel="noreferrer"
            href={props.link}
            className=" hover:text-violet-500 underline"
          >
            Click here <BiLinkExternal className="inline" />
          </a>
        )}
        <div className={SubHeadingClass}>Technologies</div>
        {props.tech}
        <div className={SubHeadingClass}>Team Size</div>
        {props.team}
        <div className={SubHeadingClass}>Role</div>
        {props.role}
      </div>
    </motion.div>
  );
};

export default ProjectSinglePage;
