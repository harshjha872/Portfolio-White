import Link from "next/link";

const Navbar = () => {
  return (
    <header className="w-[45vw] m-auto">
      <ul className="flex flex-row justify-evenly w-full py-4 font-bold">
        <li className="Navbaritems group">
          <Link href="/">Home</Link>
        </li>
        <li className="Navbaritems group">
          <a target="_blank" href="/Harsh_Jha_resume.pdf">
            Resume
          </a>
        </li>
        <li className="Navbaritems group">
          <Link href="/projects">Projects</Link>
        </li>
        <li className="Navbaritems group">
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </header>
  );
};

export default Navbar;
