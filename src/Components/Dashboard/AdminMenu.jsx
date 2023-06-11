import { MdManageAccounts, MdOutlineManageHistory } from "react-icons/md";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const AdminMenu = () => {
  return (
    <div>
      <ul className="text-gray-100 mb-5">
        <motion.li whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Link to="/dashboard/manage-users">
            <li className="flex items-center text-lg mt-4 hover:text-neutral-600 mx-auto gap-1 justify-center">
              <MdManageAccounts /> <span>Manage Users</span>
            </li>
          </Link>
        </motion.li>
        <motion.li whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Link to="/dashboard/manage-classes">
            <li className="flex items-center hover:text-neutral-600 text-lg mt-4 mx-auto gap-1 justify-center">
              <MdOutlineManageHistory /> <span>Manage Classes</span>
            </li>
          </Link>
        </motion.li>
      </ul>
    </div>
  );
};

export default AdminMenu;
