import { Player } from "@lottiefiles/react-lottie-player";
import animation from "../../assets/animation/dashboard.json";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
const DashboardHome = () => {
  const { user } = useContext(AuthContext);
  return (
    <div className="flex items-center flex-col-reverse md:flex-row ">
      <div className="mx-auto   md:w-1/2">
        <Player autoplay loop src={animation}></Player>
      </div>
      <div className="mx-auto text-center md:w-1/2 space-y-2">
        <h1 className="text-4xl bg-[#AEE2FF] inline-block px-3 py-2 rounded-lg shadow-lg">
          Dashboard
        </h1>
        <img src={user?.photoURL} alt="" className="w-28 mx-auto shadow-md" />
        <p className="text-xl font-medium">Name: {user?.displayName}</p>
        <p className="text-lg font-medium">
          Email: <span className="hover:underline">{user?.email}</span>
        </p>
      </div>
    </div>
  );
};

export default DashboardHome;
