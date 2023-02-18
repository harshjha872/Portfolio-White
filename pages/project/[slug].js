import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import ProjectSinglePage from "../../components/Projects/ProjectSinglePage";

const ProjectDetails = (props) => {
  const [content, setContent] = useState({});
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const { slug } = router.query;

  useEffect(() => {
    //IMPORTANT
    if (!router.isReady) return;

    fetch(`https://harsh-jha-portfolio.vercel.app/api/getproject?slug=${slug}`)
      .then((a) => {
        return a.json();
      })
      .then((parsed) => {
        setContent(parsed.ProjectName);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, [router.isReady, slug]);

  if (content.link) {
    return (
      <div className=" h-screen w-[65vw] sm:w-[55vw] md:w-[48vw] lg:w-[40vw] m-auto">
        {!loading ? (
          <ProjectSinglePage
            title={content.projectHeading}
            projectImage={content.projectImage}
            about={content.about}
            team={content.team}
            role={content.role}
            tech={content.tech}
            link={content.link}
          />
        ) : (
          <svg
            className="animate-spin mx-auto h-8 w-8 text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
        )}
      </div>
    );
  }
  return (
    <div className="h-screen w-[65vw] sm:w-[55vw] md:w-[48vw] lg:w-[40vw] m-auto">
      {!loading ? (
        <ProjectSinglePage
          title={content.projectHeading}
          projectImage={content.projectImage}
          about={content.about}
          team={content.team}
          role={content.role}
          tech={content.tech}
        />
      ) : (
        <svg
          className="animate-spin mx-auto h-8 w-8 text-white"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          ></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          ></path>
        </svg>
      )}
    </div>
  );
};

export async function getServerSideProps(context) {
  return {
    props: { text: "Hello" },
  };
}

export default ProjectDetails;
