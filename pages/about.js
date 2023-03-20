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
      <div className="flex flex-col m-0">
        <div className="text-3xl font-bold tracking-tight md:text-4xl">
          About Me
        </div>

        <div className="pt-7 text-lg">
          Hey, I&apos;m Harsh! I&apos;m a Fullstack developer working my way up.
          Welcome to my spot on the web for my projects, interests, and anything
          else I want to express about me. Check out the projects page to see a
          highlight of my work.
        </div>
        <div className="pt-4 text-lg">
          My only motivation for this site is to share what I&apos;ve learned
          and made till now, and I hope the person who sees this would be
          informed accordingly.
        </div>
        <div className="pt-4 text-lg">
          You can contact me by email at{" "}
          <a
            className="font-semibold text-indigo-500 underline"
            href="mailto:harshjha872@gmail.com"
          >
            Harsh Jha
          </a>{" "}
          to say hi! I always appreciate meeting new people.
        </div>
        <div className="text-3xl font-bold pt-6">Tools</div>
        <hr className="h-px my-1  border-0 bg-neutral-300 dark:bg-neutral-800"></hr>
        <ul className="list-disc pl-5 py-3">
          <li>
            This website is hosted on{" "}
            <a
              className="text-indigo-500 underline font-semibold"
              href="https://vercel.com/"
            >
              Vercel
            </a>{" "}
            and uses the{" "}
            <a
              className="text-indigo-500 underline font-semibold"
              href="https://nextjs.org/"
            >
              Next.js
            </a>{" "}
            framework
          </li>
          <li>
            Coding:
            <a
              className="text-indigo-500 underline font-semibold ml-1"
              href="https://code.visualstudio.com/"
            >
              VS Code
            </a>{" "}
            with Dark+ theme
          </li>
          <li>
            Music:
            <a
              className="text-indigo-500 underline font-semibold ml-1"
              href="https://open.spotify.com/"
            >
              Spotify
            </a>
          </li>
          <li>
            Everything else: <span className="font-semibold">Google</span>
          </li>
        </ul>
        <div className="text-3xl font-bold pt-6">Interests</div>
        <hr className="h-px my-1 border-0 bg-neutral-300 dark:bg-neutral-800"></hr>
        <ul className="list-disc pl-5 py-3">
          <li>Gaming</li>
          <li>
            listening songs{" "}
            <a
              className="dark:text-indigo-500 underline"
              href="https://open.spotify.com/playlist/37i9dQZF1DX4GsmbWgWBBu?si=302792a6d9b7426e"
              target="_blank"
              rel="noreferrer"
            >
              Playlist
            </a>
          </li>
          <li>Movies</li>
        </ul>
        <Footer />
      </div>
    </motion.div>
  );
};

export default About;
