import { MdLocationPin } from "react-icons/md";
import { AiOutlineMail } from "react-icons/ai";
import { BsPhone } from "react-icons/bs";
import ContactCard from "../components/contact/ContactCard";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <header className="text-2xl font-black py-12 px-2 text-center">
        Contact
      </header>
      <main className="w-full flex flex-row h-fit justify-center">
        <div className="py-8 px-20">
          <ul>
            <ContactCard
              icon={<MdLocationPin size={30} />}
              title="Location"
              description="KIET Group Of Institutions, Ghaziabad"
            />
            <ContactCard
              icon={<AiOutlineMail size={30} />}
              title="Email"
              description="harshjha872@gmail.com"
            />
            <ContactCard
              icon={<BsPhone size={30} />}
              title="Phone"
              description="+91-8738066880"
            />
          </ul>
        </div>
      </main>
    </motion.div>
  );
};

export default Contact;
