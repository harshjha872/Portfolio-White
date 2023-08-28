import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [theme, setTheme] = useState("");
  useEffect(() => {
    
    document.body.classList.add("dark");
    setTheme("dark");
    localStorage.theme = "dark";
    document.body.classList.add("text-[#d4d4d4]");
    document.body.classList.add("bg-[#121212]");

    // On page load or when changing themes, best to add inline in `head` to avoid FOUC
    // if (
    //   localStorage.theme === "dark" ||
    //   (!("theme" in localStorage) &&
    //     window.matchMedia("(prefers-color-scheme: dark)").matches)
    // ) {
    //   document.body.classList.add("dark");
    //   setTheme("dark");
    //   localStorage.theme = "dark";
    // } else {
    //   localStorage.theme = "light";
    //   document.body.classList.remove("dark");
    //   document.body.classList.add("bg-neutral-100");
    //   document.body.classList.add("text-neutral-900");
    //   setTheme("");
    // }

    // // Whenever the user explicitly chooses light mode
    // localStorage.theme = "light";

    // // Whenever the user explicitly chooses dark mode
    // localStorage.theme = "dark";

    // // Whenever the user explicitly chooses to respect the OS preference
    // localStorage.removeItem("theme");
  }, []);

  const router = useRouter();

  const ProjectClass = `${
    router.pathname.split("/")[1] === "projects"
      ? "Navbaritems group border-current dark:text-white border-yellow-500 hover:border-yellow-500"
      : "Navbaritems group hover:border-yellow-500"
  }`;
  const AboutClass = `${
    router.pathname.split("/")[1] === "about"
      ? "Navbaritems group hover:border-indigo-600 dark:text-white border-indigo-600 border-current"
      : "Navbaritems group hover:border-indigo-600"
  }`;

  return (
    <header className="md:w-[65vw] xl:w-[55vw] px-6 m-auto mt-12">
      <Link href="/">
        <div className="font-bold text-2xl dark:text-white cursor-pointer">
          🐤 Harsh Jha
        </div>
      </Link>
      <div className="flex justify-between w-full py-4 font-bold">
        <div className="flex space-x-6">
          <Link href="/about">
            <div className={AboutClass}>About</div>
          </Link>
          <Link href="/projects">
            <div className={ProjectClass}>Projects</div>
          </Link>
          <div className="Navbaritems group hover:border-green-600">
            <a target="_blank" href="/Harsh_Jha_resume.pdf">
              Resume
            </a>
          </div>
          {/* <div className="Navbaritems group">
            <Link href="/contact">Contact</Link>
          </div> */}
        </div>
        <button
          onClick={() => {
            document.body.classList.toggle("dark");
            if (theme === "dark") {
              setTheme("");
              document.body.classList.add("bg-neutral-100");
              document.body.classList.add("text-neutral-900");
              document.body.classList.remove("text-[#d4d4d4]");
              document.body.classList.remove("bg-[#121212]");
            } else {
              setTheme("dark");
              document.body.classList.remove("bg-neutral-100");
              document.body.classList.remove("text-neutral-900");
              document.body.classList.add("text-[#d4d4d4]");
              document.body.classList.add("bg-[#121212]");
            }
          }}
          className="transition duration-200 ease-linear bg-neutral-200 border-neutral-300 hover:border-neutral-400 dark:bg-neutral-900 h-fit p-1 rounded-md border-[3px] dark:border-neutral-800 dark:hover:border-neutral-700"
        >
          {theme === "dark" ? "⛅" : "🌙"}
        </button>
      </div>
    </header>
  );
};

export default Navbar;
