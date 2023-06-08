import { Outlet } from "react-router-dom";
import Sidebar from "../Components/Dashboard/Sidebar";
import Navbar from "../Components/Shared/Navbar";
import Footer from "../Components/Shared/Footer";

const Dashboard = () => {
  return (
    <div className="relative md:flex">
      <div className="md:w-3/12 lg:w-2/12">
        <Sidebar />
      </div>
      <div className="flex-1 md:w-9/12 lg:w-10/12">
        <div className="">
          <div className="hidden md:block"><Navbar /></div>
          <Outlet/>
          <div><Footer/></div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
