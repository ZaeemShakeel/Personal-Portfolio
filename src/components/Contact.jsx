import { CONTACT } from "../constants";
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="border-t border-stone-900 pb-20">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-10 text-center text-4xl"
      >
        Get In Touch!
      </motion.h2>
      <div className="text-center tracking-tighter ">
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          className="my-4"
        >
          {CONTACT.address}
        </motion.p>
        <a
          href={`https://wa.me/${CONTACT.phoneNo.replace(/\D/g, "")}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <motion.p
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 1 }}
            className="my-4 hover:text-green-500 hover:font-bold transition-all duration-200 cursor-pointer"
          >
            {CONTACT.phoneNo}
          </motion.p>
        </a>

        <a
          href={`mailto:${CONTACT.email}`}
          target="_blank"
          className="border-b text-white hover:text-red-500 hover:underline transition-all duration-300"
        >
          {CONTACT.email}
        </a>
      </div>
    </div>
  );
};

export default Contact;
