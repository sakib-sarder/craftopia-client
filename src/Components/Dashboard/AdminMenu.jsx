import { MdManageAccounts, MdOutlineManageHistory } from "react-icons/md";

const AdminMenu = () => {
  return (
    <div>
      <ul className="text-gray-100 mb-5">
        <li className="flex items-center text-lg mt-4 mx-auto gap-1 justify-center">
          <MdManageAccounts className="text-white" />{" "}
          <span>My Selected Class</span>
        </li>
        <li className="flex items-center text-lg mt-4 mx-auto gap-1 justify-center">
          <MdOutlineManageHistory /> <span>Manage Classes</span>
        </li>
      </ul>
    </div>
  );
};

export default AdminMenu;
