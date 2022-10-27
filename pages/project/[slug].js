import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import ProjectSinglePage from "../../components/Projects/ProjectSinglePage";

const ProjectDetails = (props) => {
  const [content, setContent] = useState({});
  const router = useRouter();
  const { slug } = router.query;

  useEffect(() => {
    //IMPORTANT
    if (!router.isReady) return;

    fetch(`http://localhost:3000/api/getproject?slug=${slug}`)
      .then((a) => {
        return a.json();
      })
      .then((parsed) => {
        setContent(parsed.ProjectName);
      })
      .catch((err) => console.log(err));
  }, [router.isReady, slug]);

  if (content.link) {
    return (
      <div className=" h-screen w-[45vw] m-auto">
        <ProjectSinglePage
          title={content.projectHeading}
          projectImage={content.projectImage}
          about={content.about}
          team={content.team}
          role={content.role}
          tech={content.tech}
          link={content.link}
        />
      </div>
    );
  }
  return (
    <div className="h-screen w-[45vw] m-auto">
      <ProjectSinglePage
        title={content.projectHeading}
        projectImage={content.projectImage}
        about={content.about}
        team={content.team}
        role={content.role}
        tech={content.tech}
      />
    </div>
  );
};

export async function getServerSideProps(context) {
  return {
    props: { text: "Hello" },
  };
}

export default ProjectDetails;
