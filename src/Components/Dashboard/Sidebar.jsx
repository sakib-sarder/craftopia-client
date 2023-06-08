import { RiBarChartHorizontalLine } from "react-icons/ri";
import logo from "../../assets/logo.png";
import { useContext, useState } from "react";
import { AiTwotoneHome } from "react-icons/ai";
import { MdOutlineSell } from "react-icons/md";
import { GiTeacher } from "react-icons/gi";
import { SiGoogleclassroom } from "react-icons/si";
import { AuthContext } from "../../Provider/AuthProvider";
import { NavLink } from "react-router-dom";
import { HiLogout } from "react-icons/hi";
import StudentMenu from "./StudentMenu";

const Sidebar = () => {
  const { user } = useContext(AuthContext);
  const [openSidebar, setOpenSideBar] = useState(false);
  return (
    <>
      <div className="flex justify-between items-center p-2 md:hidden">
        <div>
          <img src={logo} className="w-28" />
        </div>
        <div onClick={() => setOpenSideBar(!openSidebar)}>
          <RiBarChartHorizontalLine className="text-4xl cursor-pointer" />
        </div>
      </div>
      {openSidebar && (
        <div className="h-[100vh] bg-[#8ea1ee] w-3/6 md:hidden top-0 fixed z-40 ">
          <div>
            <img
              src={logo}
              alt="logo"
              className="w-40 mx-auto border-b-[1px] border-b-sky-700"
            />
          </div>
          <div className="my-6">
            <img src={user?.photoURL} alt="" className="mx-auto rounded-lg" />
            <div className="text-center text-gray-100">
              <p>Name: {user?.displayName}</p>
              <p>
                Email: <span className="hover:underline">{user?.email}</span>
              </p>
            </div>
          </div>
          <hr />
          <div>
            <StudentMenu />
          </div>
          <hr />
          <div>
            <ul className="text-gray-100">
              <li>
                <NavLink
                  to="/"
                  className="hover:text-neutral-600 flex items-center text-lg mt-4 mx-auto gap-1 justify-center transition"
                >
                  {" "}
                  <AiTwotoneHome />
                  <span>Home</span>{" "}
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/instructor"
                  className="hover:text-neutral-600 flex items-center text-lg mt-4 mx-auto gap-1 justify-center transition"
                >
                  <GiTeacher /> <span>Instructors</span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/classes"
                  className="hover:text-neutral-600 transition flex items-center text-lg mt-4 mx-auto gap-1 justify-center"
                >
                  <SiGoogleclassroom /> <span>Classes</span>
                </NavLink>
              </li>
            </ul>
          </div>
          <hr className="my-4" />
          <button className="my-btn-primary mx-auto gap-2 flex items-center">
            <span>Logout</span> <HiLogout />
          </button>
        </div>
      )}
      <div className="h-[100vh] hidden w-full md:block bg-[#8ea1ee]">
        <div className="h-[100vh] px-2 bg-[#8ea1ee]  mx-auto top-0 fixed z-40 md:w-3/12 lg:w-2/12">
          <div className="my-6 mx-auto">
            <img src={user?.photoURL} alt="" className="mx-auto rounded-lg" />
            <div className="text-center text-gray-100">
              <p className="text-sm">Name: {user?.displayName}</p>
              <p className="text-sm">
                Email: <span className="hover:underline">{user?.email}</span>
              </p>
            </div>
          </div>
          <hr className=""/>
          <div>
            <StudentMenu />
          </div>
          <hr />
          <div>
            <ul className="text-gray-100">
              <li>
                <NavLink
                  to="/"
                  className="hover:text-neutral-600 flex items-center text-lg mt-4 mx-auto gap-1 justify-center transition"
                >
                  {" "}
                  <AiTwotoneHome />
                  <span>Home</span>{" "}
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/instructor"
                  className="hover:text-neutral-600 flex items-center text-lg mt-4 mx-auto gap-1 justify-center transition"
                >
                  <GiTeacher /> <span>Instructors</span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/classes"
                  className="hover:text-neutral-600 transition flex items-center text-lg mt-4 mx-auto gap-1 justify-center"
                >
                  <SiGoogleclassroom /> <span>Classes</span>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
