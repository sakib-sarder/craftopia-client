import { Outlet } from "react-router-dom";
import Sidebar from "../Components/Dashboard/Sidebar";

const Dashboard = () => {
  return (
    <div className="relative md:flex">
      <div className="md:w-3/12 lg:w-2/12">
        <Sidebar />
      </div>
      <div className="flex-1 md:w-9/12 lg:w-10/12">
        <div className="">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
