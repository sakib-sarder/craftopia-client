import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";
import { FaSignOutAlt } from "react-icons/fa";
import { HiMenuAlt1 } from "react-icons/hi";
import { MdOutlineClose } from "react-icons/md";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const { user, logOut } = useContext(AuthContext);
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    localStorage.setItem("theme", theme);
    const localTheme = localStorage.getItem("theme");
    document.querySelector("html").setAttribute("data-theme", localTheme);
  }, [theme]);
  const handleToggle = (e) => {
    if (e.target.checked) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };
  return (
    <div className="relative ">
      <div className="w-full px-3 md:px-8 lg:px-24 flex items-center justify-between py-3 shadow-md">
        <div>
          <Link to="/">
            <img src={logo} alt="Company Logo" className="w-40" />
          </Link>
        </div>
        <div className="hidden md:block">
          <ul className="text-lg font-semibold flex gap-3">
            <li className="hover:text-neutral-600">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "text-blue-500 transition" : ""
                }
              >
                Home
              </NavLink>
            </li>
            <li className="hover:text-neutral-600">
              <NavLink
                to="/instructors"
                className={({ isActive }) =>
                  isActive ? "text-blue-500 transition" : ""
                }
              >
                Instructors
              </NavLink>
            </li>
            <li className="hover:text-neutral-600">
              <NavLink
                to="/classes"
                className={({ isActive }) =>
                  isActive ? "text-blue-500 transition" : ""
                }
              >
                Classes
              </NavLink>
            </li>
            {user && (
              <li className="hover:text-neutral-600">
                <NavLink
                  to="/dashboard"
                  className={({ isActive }) =>
                    isActive ? "text-blue-500 transition" : ""
                  }
                >
                  Dashboard
                </NavLink>
              </li>
            )}
          </ul>
        </div>
        <div className="flex items-center gap-2">
          {user ? (
            <>
              <div className="md:flex gap-2 items-center hidden">
              <button
                onClick={handleLogOut}
                className="my-btn-primary flex items-center gap-1"
              >
                <span>Logout</span> <FaSignOutAlt />
              </button>
              <img
                src={user?.photoURL}
                alt="profile"
                referrerPolicy="no-referrer"
                className="w-9 h-9 rounded-full"
              />
             </div>
              <label className="swap swap-rotate">
                <input
                  type="checkbox"
                  onChange={handleToggle}
                  checked={theme === "light" ? false : true}
                />

                <svg
                  className="swap-on fill-current w-10 h-10"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
                </svg>
                <svg
                  className="swap-off fill-current w-10 h-10"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
                </svg>
              </label>
            </>
          ) : (
            <>
              <Link to="/login">
                <button className="my-btn-primary">Login</button>
              </Link>
              <label className="swap swap-rotate">
                <input type="checkbox" onChange={handleToggle} />
                <svg
                  className="swap-on fill-current w-10 h-10"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
                </svg>
                <svg
                  className="swap-off fill-current w-10 h-10"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
                </svg>
              </label>
            </>
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
        <div className="fixed md:hidden top-0 z-20 left-0 w-full">
          <div className="bg-white">
            <MdOutlineClose
              onClick={() => setOpenMenu(!openMenu)}
              className="text-4xl md:hidden m-2 text-[#DD83FE] cursor-pointer"
            />
            <ul className="text-lg font-semibold shadow-md py-12 flex flex-col text-center gap-3">
              <li className="hover:text-neutral-600">
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? "text-blue-500 transition" : ""
                  }
                >
                  Home
                </NavLink>
              </li>
              <li className="hover:text-neutral-600">
                <NavLink
                  to="/instructors"
                  className={({ isActive }) =>
                    isActive ? "text-blue-500 transition" : ""
                  }
                >
                  Instructors
                </NavLink>
              </li>
              <li className="hover:text-neutral-600">
                <NavLink
                  to="/classes"
                  className={({ isActive }) =>
                    isActive ? "text-blue-500 transition" : ""
                  }
                >
                  Classes
                </NavLink>
              </li>
              {user && (
                <li className="hover:text-neutral-600">
                  <NavLink
                    to="/dashboard"
                    className={({ isActive }) =>
                      isActive ? "text-blue-500 transition" : ""
                    }
                  >
                    Dashboard
                  </NavLink>
                </li>
              )}
              {user ? (
                <div className="flex justify-center gap-3">
                  <button
                    onClick={handleLogOut}
                    className="my-btn-primary flex items-center gap-1"
                  >
                    <span>Logout</span> <FaSignOutAlt />
                  </button>
                  <img
                    src={user?.photoURL}
                    alt="profile"
                    referrerPolicy="no-referrer"
                    className="w-9 h-9 rounded-full"
                  />
                </div>
              ) : (
                <Link to="/login">
                  <button className="my-btn-primary">Login</button>
                </Link>
              )}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
