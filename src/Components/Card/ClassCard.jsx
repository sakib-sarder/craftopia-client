import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const ClassCard = ({ singleClass }) => {
  const { classImage, className, instructorName, price, totalSeat, enrolled } =
    singleClass;
  const { user } = useContext(AuthContext);
  const { data: singleUser = {} } = useQuery({
    queryKey: ["users", user?.email],
    queryFn: async () => {
      const res = await axios.get(
        `${import.meta.env.VITE_API_URL}/users/${user?.email}`
      );
      return res.data;
    },
  });
  //
  const handleSelect = (selectedClass) => {
    selectedClass.studentEmail = user?.email;
    selectedClass.selectedClassId = selectedClass._id;
    delete singleClass._id;
    console.log(selectedClass);
    fetch(`${import.meta.env.VITE_API_URL}/selectedClasses`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(selectedClass),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };
  return (
    <div
      className={`flex border flex-col justify-between shadow-md  md:hover:scale-105 transition rounded-md ${
        singleClass.totalSeat === 0 ? "bg-red-300 bg-opacity-25" : ""
      }`}
    >
      <figure className=" md:h-40 lg:h-52">
        <img src={classImage} alt="class photo" className="h-full w-full" />
      </figure>
      <div className="flex-grow flex-col h-full  space-y-2">
        <div className="ps-2">
          <h3 className="text-xl font-semibold">{className}</h3>
          <p className="font-semibold">Instructor: {instructorName}</p>
        </div>
        <div className="ps-2">
          <p className="font-semibold">Price: $ {price}</p>
          <p className="font-semibold">Available Seats: {totalSeat}</p>
          <p className="font-semibold">Filled Seats: {enrolled}</p>
        </div>
      </div>
      <button
        onClick={() => handleSelect(singleClass)}
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
