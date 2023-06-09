import { RiBarChartHorizontalLine } from "react-icons/ri";
import logo from "../../assets/logo.png";
import { useContext, useState } from "react";
import { AiTwotoneHome } from "react-icons/ai";
import { GiTeacher } from "react-icons/gi";
import { SiGoogleclassroom } from "react-icons/si";
import { AuthContext } from "../../Provider/AuthProvider";
import { NavLink, useNavigate } from "react-router-dom";
import { HiLogout } from "react-icons/hi";
import AdminMenu from "./AdminMenu";
import InstructorMenu from "./InstructorMenu";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import StudentMenu from "./StudentMenu";

const Sidebar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [openSidebar, setOpenSideBar] = useState(false);
  const navigate = useNavigate();
  const { data: currentUser = {} } = useQuery({
    queryKey: ["user", user?.email],
    queryFn: async () => {
      const res = await axios.get(
        `${import.meta.env.VITE_API_URL}/users/${user?.email}`
      );
      return res.data;
    },
  });

  const handleLogOut = () => {
    logOut()
      .then(() => {
        navigate("/");
      })
      .catch((err) => console.log(err));
  };

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
          <div className="text-center py-2 mx-2 rounded-md mt-3 bg-[#AEE2FF]">
            <h1 className="text-xl font-semibold">Dashboard</h1>
          </div>
          <div className="my-6">
            <img src={user?.photoURL} alt="" className="mx-auto rounded-lg w-28" />
            <div className="text-center text-gray-100">
              <p className="text-sm">Name: {user?.displayName}</p>
              <p className="text-sm">
                Email: <span className="hover:underline">{user?.email}</span>
              </p>
              {currentUser.role ? (
                <div className="uppercase py-1 mx-12 rounded-xl mt-1 tracking-wider bg-[#DD83FE]">
                  {currentUser?.role}
                </div>
              ) : (
                <div className="uppercase py-1 mx-12 rounded-xl mt-1 tracking-wider bg-[#DD83FE] font-bold text-gray-900">Student</div>
              )}
            </div>
          </div>
          <hr />
          <div>
            {/* menus */}
            {currentUser.role === "Admin" && <AdminMenu />}
            {currentUser.role === "Instructor" && <InstructorMenu />}
            {!currentUser.role && <StudentMenu />}
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
                  to="/instructors"
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
          <button
            onClick={handleLogOut}
            className="my-btn-primary mx-auto gap-2 flex items-center"
          >
            <span>Logout</span> <HiLogout />
          </button>
        </div>
      )}
      {/* Large Device */}
      <div className="h-[100vh] hidden w-full md:block bg-[#8ea1ee]">
        <div className="h-[100vh] px-2 bg-[#8ea1ee]  mx-auto top-0 fixed z-40 md:w-3/12 lg:w-2/12">
          <div className="text-center py-2 mx-2 rounded-md mt-3 bg-[#AEE2FF]">
            <h1 className="text-xl font-semibold">Dashboard</h1>
          </div>
          <div className="my-6 mx-auto">
            <img src={user?.photoURL} alt="" className="mx-auto rounded-lg w-28" />
            <div className="text-center text-gray-100">
              <p className="text-sm">Name: {user?.displayName}</p>
              <p className="text-sm">
                Email: <span className="hover:underline">{user?.email}</span>
              </p>
              {currentUser.role ? (
                <div className="uppercase py-1 mx-12 rounded-xl mt-1 tracking-wider bg-[#DD83FE]">
                  {currentUser?.role}
                </div>
              ) : (
                <div className="uppercase py-1 mx-12 rounded-xl mt-1 tracking-wider bg-[#DD83FE] font-bold text-gray-900">Student</div>
              )}
            </div>
          </div>
          <hr className="" />
          <div>
            {/* Dynamic Menu */}
            {currentUser.role === "Admin" && <AdminMenu />}
            {currentUser.role === "Instructor" && <InstructorMenu />}
            {!currentUser.role && <StudentMenu />}
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
                  to="/instructors"
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
