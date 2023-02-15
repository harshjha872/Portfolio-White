import SidebarIcon from "./SidebarIcon";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { AiOutlineTwitter, AiOutlineInstagram } from "react-icons/ai";

const SideBar = () => {
  return (
    <div
      className="flex flex-col h-screen w-16 
    items-center justify-end fixed"
    >
      <div className="flex flex-col my-12">
        <ul className="flex flex-col">
          <li>
            <a
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
              href="https://www.facebook.com/harsh.jha.3367174/"
            >
              {" "}
              <SidebarIcon icon={<FaFacebookF size={20} />} />
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
