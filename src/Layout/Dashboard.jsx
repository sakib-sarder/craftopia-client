import { Outlet } from "react-router-dom";

const Dashboard = () => {
    return (
        <div className="relative md:flex">
      Welcome to dashboard
      <div className="flex-1">
        <div className="">
          <Outlet />
        </div>
      </div>
    </div>
    );
};

export default Dashboard;