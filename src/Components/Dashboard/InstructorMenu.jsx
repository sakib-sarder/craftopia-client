import { AiOutlineVideoCameraAdd } from "react-icons/ai";
import { MdOutlineSell } from "react-icons/md";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const InstructorMenu = () => {
  return (
    <div>
      <ul className="text-gray-100 mb-5">
        <Link to={"/dashboard/add-a-class"}>
          <motion.li
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center hover:text-neutral-800 text-lg mt-4 mx-auto gap-1 justify-center"
          >
            <AiOutlineVideoCameraAdd /> <span>Add a Class</span>
          </motion.li>
        </Link>
        <Link to="/dashboard/my-classes">
          <motion.li whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="flex items-center hover:text-neutral-800 text-lg mt-4 mx-auto gap-1 justify-center">
            <MdOutlineSell /> <span>My Classes</span>
          </motion.li>
        </Link>
      </ul>
    </div>
  );
};

export default InstructorMenu;
