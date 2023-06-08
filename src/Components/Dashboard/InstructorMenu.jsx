import { AiOutlineVideoCameraAdd } from "react-icons/ai";
import { MdOutlineSell } from "react-icons/md";
import { Link } from "react-router-dom";

const InstructorMenu = () => {
  return (
    <div>
      <ul className="text-gray-100 mb-5">
        <Link to={"/dashboard/add-a-class"}>
          {" "}
          <li className="flex items-center text-lg mt-4 mx-auto gap-1 justify-center">
            <AiOutlineVideoCameraAdd className="text-white" />{" "}
            <span>Add a Class</span>
          </li>
        </Link>
        <Link to="/dashboard/my-classes">
          <li className="flex items-center text-lg mt-4 mx-auto gap-1 justify-center">
            <MdOutlineSell /> <span>My Classes</span>
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default InstructorMenu;
