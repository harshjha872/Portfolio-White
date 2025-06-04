import ProjectCard from "../components/Projects/ProjectCard";
import ProjectWrapper from "../components/Projects/ProjectWrapper";
import { motion } from "framer-motion";
import SideBar from "../components/SideBar/SideBar";
import NewProjectCard from "../components/Projects/NewProjectCard";
import Footer from "../components/footer/Footer";
import { BsSpotify } from "react-icons/bs";

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
      initial={{ opacity: 0, y: 5 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex flex-col md:w-[65vw] xl:w-[55vw] h-full m-auto px-6 md:mt-8 mt-4 dark:text-white">
        <div className="flex flex-col m-0">
          <section className="mb-12 mt-4">
            <h3 className="text-3xl font-bold tracking-tight md:text-4xl mb-8">
              Projects
            </h3>

            <div className="flex flex-col gap-4 flex-wrap sm:flex-nowrap">
              <div className="flex gap-4 flex-wrap sm:flex-nowrap">
                <NewProjectCard
                  year={2025}
                  projectHeading="Taskbuddy"
                  desc="Handle all yours task at one place"
                  source="https://github.com/harshjha872/task-management"
                  demo="https://task-management-delta-rust.vercel.app/"
                />
                <NewProjectCard
                  year={2022}
                  projectHeading="MoviesSaga"
                  desc="A Simple movie recommendation website"
                  source="https://github.com/harshjha872/Movies-App"
                  demo="https://moviessaga.vercel.app/"
                />
              </div>
              <div className="flex gap-4 flex-wrap sm:flex-nowrap">
                <NewProjectCard
                  year={2023}
                  projectHeading="Twitter Clone"
                  desc="A mini twitter clone"
                  source="https://github.com/harshjha872/twitter-clone"
                  demo="https://twitter-clonev1.vercel.app/"
                />
                <NewProjectCard
                  year={2021}
                  projectHeading="Maper"
                  desc="Tracker for running/Cycling on map"
                  source="https://github.com/harshjha872/Maper"
                  demo="https://maper.vercel.app/"
                />
              </div>
              <div className="flex gap-4 flex-wrap sm:flex-nowrap">
                <NewProjectCard
                  year={2020}
                  projectHeading="KreatePoll"
                  desc="Polling website"
                  source="https://github.com/harshjha872/PollPoint_"
                />
                <NewProjectCard
                  year={2020}
                  projectHeading="Obstacle Avoiding Robot"
                  desc="A robot made with sensor that avoids obstacles"
                  video="https://www.youtube.com/watch?v=IuPVCZulkXc"
                />
              </div>
              <div className="flex gap-4 flex-wrap sm:flex-nowrap">
                <NewProjectCard
                  year={2020}
                  projectHeading="E-commerce"
                  desc="An E-commerce website like amazon"
                  source="https://github.com/harshjha872/Node-js/tree/main/Shop%20App"
                />
                <NewProjectCard
                  year={2021}
                  projectHeading="Dice game"
                  desc="A dice game in which first person to score 100 wins"
                  source="https://github.com/harshjha872/Dice-Game"
                />
                {/* <NewProjectCard
                  year={2020}
                  projectHeading="Guess the number"
                  desc="A game of guessing numbers"
                  source="https://github.com/harshjha872/GuessTheNumber-game"
                /> */}
              </div>
            </div>
          </section>
          {/* <Footer /> */}
        </div>
      </div>
      {/* <ProjectWrapper>
        {projectsData.map((item) => (
          <ProjectCard
            key={Math.random()}
            projectHeading={item.projectHeading}
            projectType={item.projectType}
            projectImage={item.projectImage}
            endpoint={item.endpoint}
          />
        ))}
      </ProjectWrapper> */}
    </motion.div>
  );
};

export default Projects;
