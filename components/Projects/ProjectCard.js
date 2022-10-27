import Image from "next/image";
import Link from "next/link";

const ProjectCard = (props) => {
  const href = `/project/${props.endpoint}`;
  return (
    <div className="xl:w-1/4 md:w-1/2 p-4 md:m-4 md:mx-6 lg:m-2">
      <div className="bg-slate-50 p-6 rounded-lg shadow-lg border">
        <Link href={href}>
          <Image
            width={820}
            height={500}
            className="h-40 rounded w-full object-cover object-center mb-6 cursor-pointer hover:scale-110 transition ease-in-out duration-300"
            src={props.projectImage}
            alt="content"
          />
        </Link>
        <div className="py-4">
          <h3 className="tracking-widest text-indigo-500 py-2 text-xs font-medium title-font">
            {props.projectType}
          </h3>
          <h2 className="text-lg text-slate-900 font-medium title-font mb-4">
            {props.projectHeading}
          </h2>
          <Link href={href}>
            <div className="text-black mt-6 text-sm font-semibold bg-gray-200 rounded-3xl p-2 px-4 cursor-pointer w-fit hover:bg-violet-600 hover:text-white transition duration-300 ease-in-out">
              View Details
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
