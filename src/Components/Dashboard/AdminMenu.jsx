import { MdManageAccounts, MdOutlineManageHistory } from "react-icons/md";
import { Link } from "react-router-dom";

const AdminMenu = () => {
  return (
    <div>
      <ul className="text-gray-100 mb-5">
        <Link to="/dashboard/manage-users">
          <li className="flex items-center text-lg mt-4 mx-auto gap-1 justify-center">
            <MdManageAccounts className="text-white" />{" "}
            <span>Manage Users</span>
          </li>
        </Link>
        <li className="flex items-center text-lg mt-4 mx-auto gap-1 justify-center">
          <MdOutlineManageHistory /> <span>Manage Classes</span>
        </li>
      </ul>
    </div>
  );
};

export default AdminMenu;
