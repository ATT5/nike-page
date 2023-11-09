import Modal from "./Modal";
import { close } from "../assets/icons";
import { navLinks } from "../constants";
import { motion } from "framer-motion";

const SliderMenu = (props) => {
  return (
    <Modal>
      <motion.section
        initial={{ x: 40, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ stagger: 0, duration: 0.2 }}
        exit={{ x: 40, opacity: 0 }}
        className="w-1/2 h-full flex bg-white justify-center"
      >
        <img
          src={close}
          alt="close icon"
          className="w-6 h-6 absolute right-0 mr-4 mt-4 cursor-pointer"
          onClick={() => props.onClick()}
        />
        <ul className="mt-40">
          {navLinks.map(({ href, label }) => (
            <li
              className="my-2 font-extrabold text-gray-700 hover:text-gray-500 cursor-pointer"
              key={label}
            >
              <a onClick={() => props.onClick()} href={href}>
                {label}
              </a>
            </li>
          ))}
        </ul>
      </motion.section>
    </Modal>
  );
};

export default SliderMenu;
