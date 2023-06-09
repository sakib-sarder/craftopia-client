import { MdOutlineSell } from "react-icons/md";
import { AiOutlineSelect } from "react-icons/ai";
import { Link } from "react-router-dom";

const StudentMenu = () => {
  return (
    <div>
      <ul className="text-gray-100 mb-5">
        <Link to="/dashboard/my-selected-class">
          <li className="flex items-center text-lg mt-4 mx-auto gap-1 justify-center">
            <AiOutlineSelect className="text-white" />{" "}
            <span>My Selected Class</span>
          </li>
        </Link>
        <Link to="/dashboard/my-enrolled-class">
          <li className="flex items-center text-lg mt-4 mx-auto gap-1 justify-center">
            <MdOutlineSell /> <span>My Enrolled Class</span>
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default StudentMenu;
