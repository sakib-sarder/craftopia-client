import { MdOutlineSell, MdPayments } from "react-icons/md";
import { AiOutlineSelect } from "react-icons/ai";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const StudentMenu = () => {
  return (
    <div>
      <ul className="text-gray-100 mb-5">
        <Link to="/dashboard/my-selected-class">
          <motion.li
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center text-lg mt-4 hover:text-neutral-600 mx-auto gap-1 justify-center"
          >
            <AiOutlineSelect />
            <span>My Selected Class</span>
          </motion.li>
        </Link>
        <Link to="/dashboard/my-enrolled-class">
          <motion.li
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center text-lg mt-4 hover:text-neutral-600 mx-auto gap-1 justify-center"
          >
            <MdOutlineSell /> <span>My Enrolled Class</span>
          </motion.li>
        </Link>
        <Link to="/dashboard/payment-history">
          <motion.li
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center text-lg mt-4 hover:text-neutral-600 mx-auto gap-1 justify-center"
          >
            <MdPayments /> <span>Payment History</span>
          </motion.li>
        </Link>
      </ul>
    </div>
  );
};

export default StudentMenu;
