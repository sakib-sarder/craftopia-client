import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";
import { FaSignOutAlt } from "react-icons/fa";
import { HiMenuAlt1 } from "react-icons/hi";
import { MdOutlineClose } from "react-icons/md";
import { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };
  return (
    <div className="relative">
      <div className="w-full px-3 md:px-8 lg:px-24 flex items-center justify-between py-3 shadow-md">
        <div>
          <Link>
            <img src={logo} alt="Company Logo" className="w-40" />
          </Link>
        </div>
        <div className="hidden md:block">
          <ul className="text-lg font-semibold flex gap-3">
            <li className="hover:text-neutral-600">
              <NavLink to="/">Home</NavLink>
            </li>
            <li className="hover:text-neutral-600">
              <NavLink to="/instructor">Instructor</NavLink>
            </li>
            <li className="hover:text-neutral-600">
              <NavLink to="/classes">Classes</NavLink>
            </li>
            {user && (
              <li className="hover:text-neutral-600">
                <NavLink to="/dashboard">Dashboard</NavLink>
              </li>
            )}
          </ul>
        </div>
        <div className="flex items-center gap-2">
          {user ? (
            <>
              <button
                onClick={handleLogOut}
                className="my-btn-primary flex items-center gap-1"
              >
                <span>Logout</span> <FaSignOutAlt />
              </button>
              <img src={user?.photoURL} alt="profile" referrerPolicy="no-referrer" className="w-9 h-9 rounded-full"/>
            </>
          ) : (
            <Link to="/login">
              <button className="my-btn-primary">Login</button>
            </Link>
          )}
          {!openMenu && (
            <HiMenuAlt1
              onClick={() => setOpenMenu(!openMenu)}
              className="text-4xl md:hidden text-[#DD83FE] cursor-pointer"
            />
          )}
        </div>
      </div>
      {openMenu && (
        <div className="fixed top-0 z-20 left-0 w-full">
          <div className="bg-white">
            <MdOutlineClose
              onClick={() => setOpenMenu(!openMenu)}
              className="text-4xl md:hidden m-2 text-[#DD83FE] cursor-pointer"
            />
            <ul className="text-lg font-semibold shadow-md py-12 flex flex-col text-center gap-3">
              <li className="hover:text-neutral-600">
                <NavLink to="/">Home</NavLink>
              </li>
              <li className="hover:text-neutral-600">
                <NavLink to="/instructor">Instructor</NavLink>
              </li>
              <li className="hover:text-neutral-600">
                <NavLink to="/classes">Classes</NavLink>
              </li>
              <li className="hover:text-neutral-600">
                <NavLink to="/dashboard">Dashboard</NavLink>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
