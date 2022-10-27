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
      <header className="text-2xl font-bold py-12 px-2 underline underline-offset-4 text-center">
        Contact
      </header>
      <main className="w-full flex flex-row h-fit justify-center">
        <div className="p-8">
          <ul>
            <ContactCard
              icon={<MdLocationPin size={30} />}
              title="Location"
              description="Vivekanand Hostel, KIET Group Of Institutions, Ghaziabad"
            />
            <ContactCard
              icon={<AiOutlineMail size={30} />}
              title="Email"
              description="harsh.1923ec1128@kiet.edu"
            />
            <ContactCard
              icon={<BsPhone size={30} />}
              title="Phone"
              description="+91-6389840886"
            />
          </ul>
        </div>
      </main>
    </motion.div>
  );
};

export default Contact;
