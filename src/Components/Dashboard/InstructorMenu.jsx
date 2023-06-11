import { AiOutlineVideoCameraAdd } from "react-icons/ai";
import { MdOutlineSell } from "react-icons/md";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const InstructorMenu = () => {
  return (
    <div>
      <ul className="text-gray-100 mb-5">
        <motion.li whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Link to={"/dashboard/add-a-class"}>
            {" "}
            <li className="flex items-center hover:text-neutral-800 text-lg mt-4 mx-auto gap-1 justify-center">
              <AiOutlineVideoCameraAdd /> <span>Add a Class</span>
            </li>
          </Link>
        </motion.li>
        <motion.li whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Link to="/dashboard/my-classes">
            <li className="flex items-center hover:text-neutral-800 text-lg mt-4 mx-auto gap-1 justify-center">
              <MdOutlineSell /> <span>My Classes</span>
            </li>
          </Link>
        </motion.li>
      </ul>
    </div>
  );
};

export default InstructorMenu;
