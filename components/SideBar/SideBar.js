import SidebarIcon from "./SidebarIcon";
import { FaLinkedinIn } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";
import { BsTwitterX } from "react-icons/bs";
import { MdEmail } from "react-icons/md";

const SideBar = () => {
  return (
    <div className="flex h-fit w-fit items-center">
      <div className="flex my-6 ">
        <ul className="flex space-x-2">
          <li>
            <a
              className="m-0"
              target="_blank"
              rel="noreferrer"
              href="mailto:harshjha872@gmail.com"
            >
              <SidebarIcon icon={<MdEmail size={20} />} />
            </a>
          </li>
          <li>
            <a
              className="m-0"
              target="_blank"
              rel="noreferrer"
              href="https://www.github.com/harshjha872"
            >
              <SidebarIcon icon={<BsGithub size={20} />} />
            </a>
          </li>
          <li>
            <a
              className="m-0"
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/in/harsh-jha-378917195"
            >
              <SidebarIcon icon={<FaLinkedinIn size={20} />} />
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://twitter.com/harshjha872"
            >
              <SidebarIcon icon={<BsTwitterX size={17} />} />
            </a>
          </li>
        </ul>
      </div>
      {/* <Navbar /> */}
    </div>
  );
};

export default SideBar;
