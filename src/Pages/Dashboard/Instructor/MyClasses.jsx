import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";

const MyClasses = () => {
  const { user } = useContext(AuthContext);
  const { data: myClasses = [] } = useQuery({
    queryKey: ["myClasses", user?.email],
    queryFn: async () => {
      const res = await axios.get(
        `${import.meta.env.VITE_API_URL}/classes/${user?.email}`
      );
      return res.data;
    },
  });
  return (
    <div>
      <h1 className="text-center text-4xl tracking-wide font-bold pt-4">
        My Classes
      </h1>
      <div className="overflow-x-auto w-11/12 mx-auto py-8">
        <table className="text-center shadow-lg table z-10 ">
          <thead className="font-bold">
            <tr className="bg-[#E6FFFD]">
              <th>Class Name</th>
              <th>Photo</th>
              <th>Instructor Name</th>
              <th>Feedback</th>
              <th>Enrolled Students</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {myClasses.map((singleClass) => (
                <tr key={singleClass._id}>
                <td>{singleClass?.className}</td>
                <td>
                  <img
                    src={singleClass?.classImage}
                    className="w-20 rounded-md shadow-md mx-auto"
                    />
                </td>
                <td>{singleClass?.instructorName}</td>
                <td>{singleClass?.feedback ? singleClass?.feedback : ""}</td>
                <td>{singleClass?.enrolled}</td>
                <td>{singleClass?.status}</td>
                <td>
                  <button className="px-2 py-1 rounded-md font-semibold border-emerald-300 border-2 hover:bg-emerald-100 transition">
                    Update
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
              </table>
      {!myClasses.length>0 && <h1 className="text-center mt-7 text-lg font-semibold">No Data Found</h1>}
      </div>
    </div>
  );
};

export default MyClasses;
