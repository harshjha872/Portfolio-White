import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { IoSunnyOutline } from "react-icons/io5";
import { RxMoon } from "react-icons/rx";
import { FiGithub } from "react-icons/fi";
import { BsTwitterX } from "react-icons/bs";
import { FiLinkedin } from "react-icons/fi";
import { MdMailOutline } from "react-icons/md";
import { FiSun } from "react-icons/fi";
import { Mail, Linkedin, Github, Sun } from "lucide-react";

const Navbar = () => {
  const [theme, setTheme] = useState("");

  //Dark theme colors
  const darkThemeBackground = "bg-[#090B0B]";
  const darkThemeColor = "text-[#d4d4d4]";

  //Light theme colors
  const lightThemeBackground = "bg-neutral-100";
  const lightThemeColor = "text-neutral-900";

  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      document.body.classList.add("dark");
      setTheme("dark");
      localStorage.theme = "dark";
      document.body.classList.add(darkThemeColor);
      document.body.classList.add(darkThemeBackground);
    } else {
      setTheme("");
      localStorage.theme = "light";
      document.body.classList.add(lightThemeBackground);
      document.body.classList.add(lightThemeColor);
    }
  }, []);

  const router = useRouter();

  const ProjectClass = `${
    router.pathname.split("/")[1] === "projects"
      ? `Navbaritems group border-current dark:text-white border-pink-500 hover:border-pink-500`
      : `Navbaritems group hover:border-pink-500`
  }`;
  const AboutClass = `${
    router.pathname.split("/")[1] === "about"
      ? `Navbaritems group hover:border-green-600 dark:text-white border-green-600 border-current`
      : `Navbaritems group hover:border-green-600`
  }`;

  const WorkClass = `${
    router.pathname.split("/")[1] === "work"
      ? `Navbaritems group hover:border-indigo-600 dark:text-white border-indigo-600 border-current`
      : `Navbaritems group hover:border-indigo-600`
  }`;

  const abc =
    "flex items-center justify-center transition duration-[150] ease-linear  border-neutral-300 hover:border-neutral-400 dark:bg-[#090B0B] h-8 w-8 p-2 rounded-md dark:hover:bg-[#27272A] hover:bg-neutral-200 cursor-pointer";

  return (
    <header className="md:w-[65vw] xl:w-[55vw] px-6 m-auto mt-12">
      <Link href="/">
        <div className="font-bold text-2xl dark:text-white cursor-pointer">
          🐤 Harsh Jha
        </div>
      </Link>
      <div className="flex justify-between w-full py-4 font-bold">
        <div className="flex space-x-6">
          {/* <Link href="/about">
            <div className={AboutClass}>About</div>
          </Link> */}
          <Link href="/work">
            <div className={WorkClass}>Work</div>
          </Link>
          <Link href="/projects">
            <div className={ProjectClass}>Projects</div>
          </Link>
          <div className="Navbaritems group hover:border-teal-500">
            <a target="_blank" href="/Harsh_Jha_resume.pdf">
              Resume
            </a>
          </div>
          {/* <div className="Navbaritems group">
            <Link href="/contact">Contact</Link>
          </div> */}
        </div>
        <div className="flex space-x-1">
          <a
            rel="noreferrer"
            target="_blank"
            href="mailto:harshjha872@gmail.com"
          >
            <div className={abc}>
              {/* <MdMailOutline size={18} /> */}
              <Mail />
            </div>
          </a>
          <a
            rel="noreferrer"
            href="https://www.linkedin.com/in/harsh-jha-378917195"
            target="_blank"
          >
            <div className={abc}>
              {/* <FiLinkedin size={17} /> */}
              <Linkedin />
            </div>
          </a>
          <a
            rel="noreferrer"
            target="_blank"
            href="https://www.github.com/harshjha872"
          >
            <div className={abc}>
              {/* <FiGithub size={16} /> */}
              <Github />
            </div>
          </a>
          <a
            rel="noreferrer"
            target="_blank"
            href="https://twitter.com/harshjha872"
          >
            <div className={abc}>
              <BsTwitterX size={14} />
            </div>
          </a>
          <button
            onClick={() => {
              document.body.classList.toggle("dark");
              if (theme === "dark") {
                setTheme("");
                document.body.classList.add(lightThemeBackground);
                document.body.classList.add(lightThemeColor);
                document.body.classList.remove(darkThemeColor);
                document.body.classList.remove(darkThemeBackground);
              } else {
                setTheme("dark");
                document.body.classList.remove(lightThemeBackground);
                document.body.classList.remove(lightThemeColor);
                document.body.classList.add(darkThemeColor);
                document.body.classList.add(darkThemeBackground);
              }
            }}
            className={abc}
          >
            {theme === "dark" ? <Sun /> : <RxMoon size={18} />}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
