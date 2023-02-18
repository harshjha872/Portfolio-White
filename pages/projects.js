import ProjectCard from "../components/Projects/ProjectCard";
import ProjectWrapper from "../components/Projects/ProjectWrapper";
import { motion } from "framer-motion";

const Projects = () => {
  const projectsData = [
    {
      projectHeading: "KreatePoll- Polling Website",
      projectType: "Web",
      projectImage: "/polling.jpg",
      endpoint: "kreatepoll",
    },
    {
      projectHeading: "Ecommerce Website",
      projectType: "Web",
      projectImage: "/ecommerce.jpg",
      endpoint: "ecommerce",
    },
    {
      projectHeading: "Obstacle Avoiding Robot",
      projectType: "Iot",
      projectImage: "/robot.jpg",
      endpoint: "obstacle-avoiding-robot",
    },
    {
      projectHeading: "MoviesSaga",
      projectType: "Web",
      projectImage: "/moviessaga.PNG",
      endpoint: "moviessaga",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <header className="text-2xl py-12 px-2 font-black text-center">
        Recent Projects
      </header>
      <ProjectWrapper>
        {projectsData.map((item) => (
          <ProjectCard
            key={Math.random()}
            projectHeading={item.projectHeading}
            projectType={item.projectType}
            projectImage={item.projectImage}
            endpoint={item.endpoint}
          />
        ))}
      </ProjectWrapper>
    </motion.div>
  );
};

export default Projects;
