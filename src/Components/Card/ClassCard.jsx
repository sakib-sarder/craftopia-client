import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const ClassCard = ({ singleClass }) => {
  const { user } = useContext(AuthContext);
  const { data: singleUser = {} } = useQuery({
    queryKey: ["singleUser", user?.email],
    queryFn: async () => {
      const res = await axios.get(
        `${import.meta.env.VITE_API_URL}/users/${user?.email}`
      );
      return res.data;
    },
  });
  return (
    <div
      className={`flex border flex-col justify-between shadow-md  md:hover:scale-105 transition rounded-md ${
        singleClass.totalSeat === 0 ? "bg-red-300" : ""
      }`}
    >
      <figure className=" h-full">
        <img
          src={singleClass.classImage}
          alt="class photo"
          className="h-full w-full"
        />
      </figure>
      <div className="flex-grow flex-col h-full space-y-2">
        <div className="ps-2">
          <h3 className="text-xl font-semibold">{singleClass.className}</h3>
          <p className="font-semibold">
            Instructor: {singleClass.instructorName}
          </p>
        </div>
        <div className="ps-2">
          <p className="font-semibold">Price: $ {singleClass.price}</p>
          <p className="font-semibold">
            Available Seats: {singleClass.totalSeat}
          </p>
        </div>
      </div>
      <button
        className={`my-btn-primary ${
          singleClass.totalSeat === 0 ||
          singleUser?.role === "Admin" ||
          singleUser?.role === "Instructor"
            ? "disabled opacity-50 cursor-not-allowed"
            : ""
        }`}
        disabled={
          singleClass.totalSeat === 0 ||
          singleUser?.role === "Admin" ||
          singleUser?.role === "Instructor"
        }
      >
        Select Now
      </button>
    </div>
  );
};

export default ClassCard;
