import { Outlet } from "react-router-dom";
import Navbar from "../Components/Shared/Navbar";
import Footer from "../Components/Shared/Footer";

const MainLayout = () => {
  return (
    <div>
      <Navbar />
      <div className="px-3 md:px-8 lg:px-24">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
