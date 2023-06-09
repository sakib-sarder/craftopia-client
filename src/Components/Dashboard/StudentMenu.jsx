import { MdOutlineSell } from "react-icons/md";
import { AiOutlineSelect } from "react-icons/ai";

const StudentMenu = () => {
  return (
    <div>
      <ul className="text-gray-100 mb-5">
        <li className="flex items-center text-lg mt-4 mx-auto gap-1 justify-center">
          <AiOutlineSelect className="text-white" />{" "}
          <span>My Selected Class</span>
        </li>
        <li className="flex items-center text-lg mt-4 mx-auto gap-1 justify-center">
          <MdOutlineSell /> <span>My Enrolled Class</span>
        </li>
      </ul>
    </div>
  );
};

export default StudentMenu;
