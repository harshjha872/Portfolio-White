import SidebarIcon from "./SidebarIcon";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { AiOutlineTwitter, AiOutlineInstagram } from "react-icons/ai";

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
              <SidebarIcon icon={<AiOutlineTwitter size={20} />} />
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.instagram.com/harshjha872/"
            >
              <SidebarIcon icon={<AiOutlineInstagram size={20} />} />
            </a>
          </li>
        </ul>
      </div>
      {/* <Navbar /> */}
    </div>
  );
};

export default SideBar;
