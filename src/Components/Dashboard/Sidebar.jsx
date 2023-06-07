import { RiBarChartHorizontalLine } from "react-icons/ri";
import logo from "../../assets/logo.png";
import { useState } from "react";

const Sidebar = () => {
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
          {openSidebar && <div className="h-[100vh] bg-[green] w-3/6 md:hidden top-0 fixed z-40 ">asdf</div>}
          asdf
    </>
  );
};

export default Sidebar;
